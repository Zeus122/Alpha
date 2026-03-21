export default function ImagesTest() {
  const images = [
    "LOGO.jpg",
    "photo_2026-03-21_21-07-54.jpg",
    "photo_2026-03-21_21-07-57.jpg",
    "photo_2026-03-21_21-08-03.jpg",
    "photo_2026-03-21_21-08-06.jpg",
    "photo_2026-03-21_21-08-10.jpg",
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Image Analysis</h1>
      {images.map((img) => (
        <div key={img} style={{ marginBottom: 40 }}>
          <h2>{img}</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/assets/${img}`} alt={img} style={{ maxWidth: "800px", height: "auto" }} />
        </div>
      ))}
    </div>
  );
}
