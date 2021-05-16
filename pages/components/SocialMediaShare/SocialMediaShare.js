import {
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
  } from 'next-share'

const SocialMediaShare = ({url, title}) => {

    console.log(url, title);

    return (
        <div className="text-center mt-4">

            <FacebookShareButton
                url={url}
            >
            <FacebookIcon size={40} round />
            </FacebookShareButton>

            <TelegramShareButton
                url={url}
                title={title}
            >
            <TelegramIcon size={40} round />
            </TelegramShareButton>

            <TwitterShareButton
                url={url}
                title={title}            >
            <TwitterIcon size={40} round />
            </TwitterShareButton>

            <WhatsappShareButton
              url={url}
              title={title}             >
            <WhatsappIcon size={40} round />
            </WhatsappShareButton>
        </div>
    )
}

export default SocialMediaShare