<template>
  <div class="contact alt-section alt-section--contact" id="contact">
    <h2>Let’s get in touch</h2>
    <div class="content">
      <div class="contact-info">
        <img src="../assets/img/wedevelop-icon.svg" alt="WeDevelop">
        <h3>info@wedevelop.me</h3>
        <p>Buenos Aires - Argentina</p>
      </div>
      <form class="contact-form" v-on:submit="sendEmail">
        <div class="input-group">
          <input name="name" type="text" v-model.trim="contact.name" placeholder="Name">
          <label class="input-label" for="name">Name</label>
        </div>
        <div class="input-group">
          <input name="email" type="text" v-model.trim="contact.email" placeholder="Email">
          <label class="input-label" for="email">Email</label>
        </div>
        <div class="input-group">
          <textarea name="message" v-model.trim="contact.message" placeholder="Your message"></textarea>
          <label class="input-label" for="message">Your message</label>
        </div>
        <button
          type="submit"
          class="submit-button"
          :class="{'active-submit-button': !checkDisabled}"
          :disabled="checkDisabled"
        >
          Submit
        </button>
      </form>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',
  data () {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  computed: {
    checkDisabled: function () {
      const { email, name, message } = this.contact
      return name === '' || email === '' || message === ''
    }
  },
  methods: {
    sendEmail: function (e) {
      e.preventDefault()
      const { email, name, message } = this.contact
      const data = {
        'personalizations': [
          {
            'to': [
              {
                'email': 'info@wedevelop.me'
              }
            ],
            'subject': 'New message from WeDevelop site'
          }
        ],
        'from': {
          'email': email,
          'name': name
        },
        'content': [
          {
            'type': 'text/plain',
            'value': message
          }
        ]
      }
      const config = {
        headers: {
          'authorization': 'Bearer ' + process.env.VUE_APP_SENDGRID_API_KEY
        }
      }
      axios.post('https://api.sendgrid.com/v3/mail/send', data, config)
    }
  }
}
</script>

<style scoped>
  h2 {
    margin: 0 0 2.2em 0;
    color: #272A40;
    font-size: 50px;
    font-weight: 900;
    letter-spacing: 1px;
    text-align: left;
    line-height: 60px;
  }

  h3 {
    margin: .8em 0 .5em 0;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.84px;
    line-height: 34px;
    color: #272A40;
  }

  p {
    margin-top: 0;
    color: #A7AFC3;
    font-size: 18px;
    letter-spacing: 0.6px;
    text-align: left;
    line-height: 34px;
  }

  textarea {
    height: 90px;
  }

  .input-group {
    position: relative;
  }

  input, textarea {
    width: 100%;
    padding: .8em 0;
    margin-bottom: 3em;
    border: none;
    border-bottom: 1px solid #A7AFC3;
    background-color: transparent;
    resize: none;
  }

  input:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill {
    box-shadow: 0 0 0 1000px #F7F9FC inset;
  }

  input::placeholder,
  textarea::placeholder {
    color: transparent;
  }

  label {
    top: 1em;
    left: 0;
    pointer-events: none;
    position: absolute;
    text-transform: uppercase;
    color: #A7AFC3;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: all 0.2s ease-in-out;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label,
  textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    top: -.5em;
  }

  .submit-button {
    width: 45%;
    padding: 1em 0;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.36px;
    color: #fff;
    border: none;
    background-color: #A7AFC3;
    cursor: not-allowed;
  }

  .active-submit-button {
    background-color: #45DA60;
    cursor: pointer;
  }

  .contact {
    display: flex;
    align-items: center;
    flex-direction: column;
    top: 11em;
    margin: 0 10em -1em 10em;
    padding: 8em 0;
  }

  /* Top left Contact cutted corner */
  .alt-section--contact:before {
    border-bottom: 195px solid transparent;
    border-left: 195px solid #fff;
  }

  /* Bottom right Contact cutted corner */
  .alt-section--contact:after {
    border-bottom: 125px solid #272A40;
    border-left: 140px solid transparent;
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    padding: 0 7em;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 40px;
    }

    img {
      width: 100px;
    }

    .contact {
      margin: 0 6em -1em 6em;
    }

    .content {
      padding: 0 5em;
    }
  }

  .contact-info {
    width: 45%;
    text-align: left;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    width: 55%;
  }
</style>
