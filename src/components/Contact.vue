<template>
  <div class="contact" id="contact">
    <h2>Let’s get in touch</h2>
    <div class="content">
      <div class="contact-info">
        <img src="../assets/img/wedevelop-icon.svg" alt="WeDevelop">
        <h3>info@wedevelop.me</h3>
        <p>Buenos Aires - Argentina</p>
      </div>
      <form class="contact-form" v-on:submit="sendEmail">
        <input name="name" type="text" placeholder="Name" v-model="contact.name">
        <input name="email" type="text" placeholder="Email" v-model="contact.email">
        <textarea name="message" placeholder="Your message" v-model="contact.message"></textarea>
        <button type="submit">Submit</button>
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
    font-weight: 900;
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

  input, textarea {
    width: 100%;
    padding: .8em 0;
    margin-bottom: 3em;
    border: none;
    border-bottom: 1px solid #A7AFC3;
    background-color: transparent;
  }

  input:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    text-transform: uppercase;
    color: #A7AFC3;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  button {
    width: 45%;
    padding: 1em 0;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.36px;
    color: #fff;
    border: none;
    background-color: #A7AFC3;
    cursor: pointer;
  }

  .contact {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 11em;
    margin: 0 10em -1em 10em;
    padding: 8em 0;
    background-color: #F7F9FC;
  }

  .contact:before {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    width: 0px;
    height: 0px;
    border-bottom: 70px solid #eee;
    border-left: 70px solid #272822; /*Set to background color, not transparent!*/
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    padding: 0 7em;
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
