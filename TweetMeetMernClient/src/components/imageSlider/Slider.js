import Carousel from "./Carousel";

function Slider() {
  const data = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/social-media-354e2.appspot.com/o/img3.JPG?alt=media&token=d2563c73-28fa-4ba8-8a85-068fab787121",
      caption: `<div>
      Go Social
      </div>`,
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/social-media-354e2.appspot.com/o/img2.JPG?alt=media&token=03249f64-a569-4e4a-9a69-fb6d93ceaf25",
      caption: "<div>Explore</div>",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/social-media-354e2.appspot.com/o/img1.JPG?alt=media&token=e104e195-1e14-4e14-8532-6878852a4676",
      caption: "<div>Meet Online</div>",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/social-media-354e2.appspot.com/o/img4.JPG?alt=media&token=e4ca3d83-fc08-47cb-aa0a-9139e974f61a",
      caption: "<div>Stay Connected</div>",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/social-media-354e2.appspot.com/o/img5.JPG?alt=media&token=d5ba3f12-d81f-4988-86b2-3f6188133c14",
      caption: "<div>Share Memories</div>",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/social-media-354e2.appspot.com/o/img6.JPG?alt=media&token=748661bb-7033-4dd4-a14a-533b16e6aaee",
      caption: "<div>Get Creative</div>",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/social-media-354e2.appspot.com/o/img7.JPG?alt=media&token=2ffce06c-8a74-45d3-ba16-05521daeaeaa",
      caption: "<div>Express Yourself</div>",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  return (
    <div className="noselect">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            className="noselect"
            data={data}
            time={2000}
            width="850px"
            height="200px"
            captionStyle={captionStyle}
            radius="10px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "10px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;