import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const Socials = (props: { url: string }) => {
  const { url } = props;

  return (
    <section className="custom-container py-5 w-full flex gap-4 items-center">
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={36} round />
      </LinkedinShareButton>

      <TwitterShareButton url={url}>
        <TwitterIcon size={36} round />
      </TwitterShareButton>

      <FacebookShareButton url={url}>
        <FacebookIcon size={36} round />
      </FacebookShareButton>
    </section>
  );
};

export default Socials;
