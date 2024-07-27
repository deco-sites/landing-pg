import type { ImageWidget, VideoWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Video from "apps/website/components/Video.tsx";

export interface Props {
  /**
   * @format rich-text
   */
  headline?: string;
  /**
   * @format textarea
   */
  subheadline?: string;
  /**
   * @format rich-text
   */
  ctaText?: string;
  ctaLink?: string;
  /**
   * @format color-input
   */
  primaryColor?: string;
  /**
   * @format color-input
   */
  secondaryColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
  backgroundImage?: ImageWidget;
  backgroundVideo?: VideoWidget;
}

export default function HeroSection({
  headline = "Captivating Headline",
  subheadline = "Brief description of the hero section",
  ctaText = "Call to Action",
  ctaLink = "/cta",
  primaryColor = "#8B4513",
  secondaryColor = "#40E0D0",
  textColor = "#FFFFFF",
  backgroundImage,
  backgroundVideo
}: Props) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage.src})`
          : "url(https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326)"
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center" style={{ color: textColor }}>
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{headline}</h1>
          <p className="mb-5">{subheadline}</p>
          <a
            href={ctaLink}
            className="btn"
            style={{ backgroundColor: secondaryColor, color: "#000000" }}
          >
            {ctaText}
          </a>
        </div>
      </div>
      {backgroundVideo && (
        <Video
          src={backgroundVideo.src}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}
