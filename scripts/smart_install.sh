#!/bin/sh

DIR=$1
MAXDEPTH=""

if [ "$2" = "--no-recursion" -o "$3" = "--no-recursion" ]; then
  MAXDEPTH="-maxdepth 1"
fi

if [ "$2" = "ci" -o "$3" = "ci" ]; then
  NPM_COMMAND="ci"
else
  NPM_COMMAND="install"
fi

if [ -z "$DIR" ]; then
  DIR=.
fi

installPackages () {
  echo "Installing $1"
  if ! mkdir $1/smart_install.lock 2>/dev/null; then
    echo "Smart install already running in $DIR." >&2
    exit 1
  fi

  CURRENT_DIRECTORY=$(pwd)

  diff -Nq "$1/package.json" "$1/.package.json.smart_installed" || {
   cd "$1" && \
   npm $NPM_COMMAND && \
   cp "package.json" ".package.json.smart_installed"
  }

  EXIT_CODE=$?

  cd $CURRENT_DIRECTORY
  rm -r $1/smart_install.lock

  if [ $EXIT_CODE -ne "0" ]; then
    exit $EXIT_CODE
  fi
}

echo "Current working directory is $(pwd)"
echo "Looking for package files in $DIR"

FILES=$(find $DIR $MAXDEPTH -name "package.json" 2> /dev/null | grep -v node_modules)

echo "Installing the following files"
echo $FILES

if [ ! -z "$FILES" ]; then
  for FILE in $FILES; do
    DIRECTORY=$(echo $FILE | sed -e 's/\/package\.json$//')
    installPackages $DIRECTORY
  done
fi
