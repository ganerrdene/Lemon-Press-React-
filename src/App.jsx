import "./style.css";
import Media from "./component";
const mediaS = [
  {
    title: "Хэвлэлийн мэдээ",
    medias: [
      {
        mediaTitle: "Монгол бартендер дэлхийд өрсөлдлөө",
        mediaParagraph: "Lemon Press / 12 сарын 13, 2024",
        mediaImg:
          "https://dash-api.yld.mn/api/image/18016e65-ab3a-447d-9469-494c3ee7cffc",
      },
      {
        mediaTitle:
          "Чанарын өндөр түвшинд албан байгууллага болон оффис цэвэрлэгээний үйлчилгээ үзүүлнэ",
        mediaParagraph: "Lemon Press / 12 сарын 12, 2024",
        mediaImg:
          "https://dash-api.yld.mn/api/image/2320e341-c587-4221-a9c9-690e4346f8ad",
      },
      {
        mediaTitle:
          "Хөгжлийн банкны хөрөнгө оруулах МНСК-ын эрүүл орчинд амьдрах төслийн үр шимийг 23 мянган өрх хүртэнэ",
        mediaParagraph: "Lemon Press / 12 сарын 6, 2024",
        mediaImg:
          "https://dash-api.yld.mn/api/image/b4572cc3-5bab-4906-959d-189d72580471",
      },
    ],
  },
  {
    title: "Хэвлэлийн мэдээ",
    medias: [
      {
        mediaTitle: "Монгол бартендер дэлхийд өрсөлдлөө",
        mediaParagraph: "Lemon Press / 12 сарын 13, 2024",
        mediaImg:
          "https://dash-api.yld.mn/api/image/18016e65-ab3a-447d-9469-494c3ee7cffc",
      },
      {
        mediaTitle:
          "Чанарын өндөр түвшинд албан байгууллага болон оффис цэвэрлэгээний үйлчилгээ үзүүлнэ",
        mediaParagraph: "Lemon Press / 12 сарын 12, 2024",
        mediaImg:
          "https://dash-api.yld.mn/api/image/2320e341-c587-4221-a9c9-690e4346f8ad",
      },
      {
        mediaTitle:
          "Хөгжлийн банкны хөрөнгө оруулах МНСК-ын эрүүл орчинд амьдрах төслийн үр шимийг 23 мянган өрх хүртэнэ",
        mediaParagraph: "Lemon Press / 12 сарын 6, 2024",
        mediaImg:
          "https://dash-api.yld.mn/api/image/b4572cc3-5bab-4906-959d-189d72580471",
      },
    ],
  },
  {
    title: "Хэвлэлийн мэдээ",
    medias: [
      {
        mediaTitle: "Монгол бартендер дэлхийд өрсөлдлөө",
        mediaParagraph: "Lemon Press / 12 сарын 13, 2024",
        mediaImg:
          "https://dash-api.yld.mn/api/image/18016e65-ab3a-447d-9469-494c3ee7cffc",
      },
      {
        mediaTitle:
          "Чанарын өндөр түвшинд албан байгууллага болон оффис цэвэрлэгээний үйлчилгээ үзүүлнэ",
        mediaParagraph: "Lemon Press / 12 сарын 12, 2024",
        mediaImg:
          "https://dash-api.yld.mn/api/image/2320e341-c587-4221-a9c9-690e4346f8ad",
      },
      {
        mediaTitle:
          "Хөгжлийн банкны хөрөнгө оруулах МНСК-ын эрүүл орчинд амьдрах төслийн үр шимийг 23 мянган өрх хүртэнэ",
        mediaParagraph: "Lemon Press / 12 сарын 6, 2024",
        mediaImg:
          "https://dash-api.yld.mn/api/image/b4572cc3-5bab-4906-959d-189d72580471",
      },
    ],
  },
];
const App = () => {
  return (
    <div>
      {mediaS.map((medee) => {
        return (
          <div className="container">
            <div className="container-title">
              <h1 className="container-title">{medee.title}</h1>
              <a href="#" className="viewMore">
                Илүү үзэх
              </a>
            </div>
            <div className="medias">
              {medee.medias.map((jijigMedee) => {
                return (
                  <Media
                    image={jijigMedee.mediaImg}
                    title={jijigMedee.mediaTitle}
                    paragraph={jijigMedee.mediaParagraph}
                    category={medee.title}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
