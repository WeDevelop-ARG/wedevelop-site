import ClutchWidget from 'main_app/components/ClutchWidget'
import SVGIcon from 'main_app/components/SVGIcon'

import classes from './styles.module.scss'

function Header () {
  return (
    <section id="headerSection" className={classes.headerContainer}>
      <div className={classes.content}>
        <p className={classes.subheadingText}>IT staff augmentation</p>
        <h1 className={classes.titleText}>
          <div>The extra talent needed</div>
          <div>to Boost <span className={classes.highlightedText}>Your Projects</span></div>
        </h1>
        <ClutchWidget variant='dark' className={classes.clutchWidget} />
        <svg className={classes.rocket} width="287" height="279" viewBox="0 0 287 279" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M58.5794 195.064C78.7997 176.646 80.4376 188.422 89.3358 196.683C98.2339 204.945 111.023 206.564 90.8025 224.982C70.5822 243.401 16.1116 263.383 16.1116 263.383C16.1116 263.383 38.3591 213.483 58.5794 195.064Z" fill="url(#paint0_linear)"/>
          <path opacity="0.1" d="M70.0472 199.239C79.9842 190.718 80.5089 196.286 84.5362 200.257C88.5634 204.227 94.5682 205.097 84.6312 213.618C74.6943 222.14 48.5512 231.116 48.5512 231.116C48.5512 231.116 60.1102 207.761 70.0472 199.239Z" fill="black"/>
          <path d="M60.9857 144.294C60.9857 144.294 64.8576 146.707 64.8363 150.875C64.8363 150.875 62.3232 150.75 60.4966 146.327L60.9857 144.294Z" fill="#6C63FF"/>
          <path d="M60.6665 143.917C60.6665 143.917 56.1761 144.708 54.6802 148.598C54.6802 148.598 57.0676 149.425 60.375 145.99L60.6665 143.917Z" fill="#6C63FF"/>
          <path d="M62.5006 137.844C62.5006 137.844 66.0212 136.533 68.4709 144.751C68.4709 144.751 66.2948 145.8 63.9992 143.577C61.7037 141.354 61.9935 139.699 62.5006 137.844Z" fill="#6C63FF"/>
          <path d="M91.779 134.766C91.779 134.766 94.1284 136.225 94.1091 138.747C94.1091 138.747 92.5931 138.665 91.4861 135.997L91.779 134.766Z" fill="#6C63FF"/>
          <path d="M91.5869 134.543C91.5869 134.543 88.8738 135.023 87.9706 137.374C87.9706 137.374 89.4207 137.864 91.4203 135.804L91.5869 134.543Z" fill="#6C63FF"/>
          <path d="M92.7002 130.868C92.7002 130.868 94.8259 130.076 96.3021 135.04C96.3021 135.04 94.9889 135.673 93.6015 134.329C92.2141 132.985 92.397 131.995 92.7002 130.868Z" fill="#6C63FF"/>
          <path d="M92.5817 130.576C92.5817 130.576 91.0348 128.899 87.4967 132.658C87.4967 132.658 88.388 133.823 90.2274 133.253C92.0669 132.683 92.3452 131.721 92.5817 130.576Z" fill="#6C63FF"/>
          <path d="M94.275 126.598C94.275 126.598 97.5349 124.773 99.3913 129.684C99.3913 129.684 96.4878 131.436 93.8511 127.812L94.275 126.598Z" fill="#6C63FF"/>
          <path d="M96.6358 121.699C96.6358 121.699 100.765 120.587 101.834 125.858C101.834 125.858 98.5267 127.404 96.0833 122.895L96.6358 121.699Z" fill="#6C63FF"/>
          <path d="M94.2367 126.457C94.2367 126.457 93.1158 122.883 88.3986 125.169C88.3986 125.169 89.3199 128.442 93.7101 127.627L94.2367 126.457Z" fill="#6C63FF"/>
          <path d="M85.987 161.084C85.2643 160.584 84.4927 160.16 83.6843 159.817C65.6711 152.172 32.5941 186.045 32.5941 186.045L28.7883 182.281C28.7883 182.281 41.8775 166.65 57.0394 140.877C70.6741 117.682 106.405 120.15 113.441 120.875C114.229 120.96 114.657 121.016 114.657 121.016C127.055 147.352 85.987 161.084 85.987 161.084Z" fill="#AFC0E0"/>
          <path opacity="0.2" d="M115.493 123C115.248 122.352 114.979 121.698 114.665 121.033C114.665 121.033 114.241 120.982 113.448 120.892C106.413 120.168 70.682 117.7 57.0472 140.894C41.8854 166.668 28.7889 182.282 28.7889 182.282L30.9291 184.399C30.9291 184.399 44.0303 168.78 59.1801 142.995C72.749 119.905 108.232 122.25 115.493 123Z" fill="white"/>
          <path d="M145.89 228.768C120.272 244.2 104.81 257.473 104.81 257.473L100.997 253.702C100.997 253.702 136.031 218.762 126.079 201.15C125.868 200.764 125.633 200.391 125.376 200.034C125.376 200.034 138.651 158.811 165.124 170.932C165.124 170.932 165.176 171.272 165.25 171.907C166.011 178.341 169.199 214.718 145.89 228.768Z" fill="#AFC0E0"/>
          <path opacity="0.1" d="M85.9887 161.085C85.266 160.586 84.4944 160.161 83.686 159.818C92.6179 146.113 102.563 133.098 113.437 120.881C114.226 120.966 114.654 121.021 114.654 121.021C127.057 147.353 85.9887 161.085 85.9887 161.085Z" fill="black"/>
          <path opacity="0.1" d="M165.252 171.919C153.007 182.714 139.904 192.497 126.072 201.172C125.861 200.786 125.626 200.413 125.369 200.056C125.369 200.056 138.643 158.833 165.116 170.954C165.118 170.937 165.171 171.277 165.252 171.919Z" fill="black"/>
          <path d="M119.203 204.243C112.644 208.19 105.719 212.045 98.4283 215.808C98.4283 215.808 81.0816 216.223 69.1897 186.888C69.1897 186.888 72.8615 179.044 80.3436 166.935C96.7885 140.305 131.659 93.0523 186.42 63.2526C202.846 54.2584 220.351 47.3806 238.519 42.7827C238.519 42.7827 237.086 66.0701 221.46 97.8974C205.835 129.725 176.001 170.087 119.203 204.243Z" fill="#E3E8F4"/>
          <path d="M154.018 131.688C163.499 141.066 178.757 141.013 188.098 131.569C197.439 122.125 197.325 106.868 187.844 97.4898C178.363 88.112 163.105 88.1655 153.764 97.6092C144.424 107.053 144.537 122.311 154.018 131.688Z" fill="#AFC0E0"/>
          <path d="M183.096 126.64C180.825 128.937 177.945 130.538 174.793 131.259C171.641 131.979 168.345 131.789 165.289 130.711C162.234 129.632 159.544 127.71 157.532 125.166C155.521 122.623 154.271 119.564 153.927 116.344C153.763 114.769 153.816 113.18 154.085 111.622C154.204 110.924 154.366 110.234 154.572 109.557C155.376 106.918 156.809 104.516 158.749 102.558C158.846 102.46 158.941 102.365 159.035 102.269C161.662 99.7379 165.035 98.1177 168.658 97.646C172.282 97.1744 175.966 97.8763 179.17 99.6487C180.387 100.332 181.519 101.157 182.543 102.106L182.907 102.467C184.507 104.047 185.781 105.927 186.657 107.997C187.532 110.068 187.992 112.289 188.01 114.534C188.027 116.779 187.602 119.003 186.759 121.081C185.916 123.158 184.672 125.047 183.096 126.64Z" fill="#15579E"/>
          <path d="M221.457 97.8954C192.793 87.9188 186.414 63.2339 186.414 63.2339C202.842 54.2459 220.349 47.3745 238.518 42.7831C238.518 42.7831 237.085 66.0704 221.457 97.8954Z" fill="#AFC0E0"/>
          <path d="M119.203 204.243C114.76 206.914 110.152 209.543 105.38 212.13C103.107 213.367 100.791 214.59 98.4326 215.799C98.4326 215.799 81.086 216.214 69.194 186.879C69.194 186.879 70.386 184.332 72.7866 179.891C74.6077 176.545 77.1203 172.13 80.3407 166.919C80.3407 166.919 84.8014 177.806 95.7275 188.613C102.454 195.312 110.432 200.624 119.203 204.243Z" fill="#AFC0E0"/>
          <path d="M105.38 212.129C103.107 213.366 100.791 214.589 98.4324 215.798C98.4324 215.798 81.0858 216.213 69.1939 186.878C69.1939 186.878 70.3858 184.331 72.7864 179.891C72.784 179.888 87.8859 206.774 105.38 212.129Z" fill="#E3E8F4"/>
          <path opacity="0.2" d="M179.195 99.6387L179.15 99.6318L159.057 102.257C158.963 102.353 158.869 102.448 158.772 102.546C156.832 104.504 155.398 106.906 154.594 109.545L182.572 102.101L179.195 99.6387Z" fill="white"/>
          <path opacity="0.2" d="M171.865 112.697L153.938 116.335C153.774 114.76 153.827 113.171 154.096 111.612L171.847 110.922L171.865 112.697Z" fill="white"/>
          <path opacity="0.2" d="M73.8204 191.458C73.8204 191.458 77.4945 183.611 84.9742 171.505C101.421 144.873 136.292 97.6199 191.053 67.8202C205.847 59.7347 221.517 53.3559 237.762 48.8061C238.381 44.9358 238.51 42.7777 238.51 42.7777C220.344 47.3712 202.84 54.2442 186.415 63.2333C131.655 93.033 96.784 140.286 80.3368 166.918C72.8571 179.025 69.1829 186.871 69.1829 186.871C73.8844 198.459 79.4338 205.403 84.4273 209.567C80.7873 205.376 77.1017 199.544 73.8204 191.458Z" fill="white"/>
          <defs>
            <linearGradient id="paint0_linear" x1="69.1874" y1="244.672" x2="39.6809" y2="212.279" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4776E6"/>
              <stop offset="1" stop-color="#8E54E9"/>
            </linearGradient>
          </defs>
        </svg>
        <a href="#contact" className={classes.scrollDown}>
          <SVGIcon name='nav_bar/chevron_right' className={classes.chevron} />
        </a>
      </div>
    </section>
  )
}

export default Header
