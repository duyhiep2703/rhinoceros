import { useMemo } from "react";
import "./App.css";

function RhinoMark() {
  return (
    <svg
      className="rhinoMark"
      width="40"
      height="40"
      viewBox="0 0 64 64"
      role="img"
      aria-label="Biểu tượng tê giác"
    >
      <path
        d="M48.5 22.2c-1.7-6.4-7.3-10.7-14.3-10.7-8.6 0-15.6 6.9-15.6 15.5 0 5.1 2.4 9.7 6.2 12.6l-1.8 8.9c-.2 1.2.6 2.4 1.9 2.6l7 .9c1.2.2 2.4-.6 2.6-1.9l.6-3.2h8.2l.9 2.8c.4 1.1 1.6 1.7 2.7 1.2l6.4-2.6c1.1-.4 1.7-1.6 1.3-2.7l-2.4-6.3c3.7-2.8 6.1-7.2 6.1-12.2 0-1.8-.3-3.6-.8-5.1l-6.8.2z"
        fill="#D9E1F0"
        stroke="#173A52"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M41.5 16.8c2.3.5 4.3 2.2 5.2 4.6"
        fill="none"
        stroke="#173A52"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M23.7 26.5c1.2-4.1 5-7 9.4-7 3 0 5.7 1.3 7.5 3.4"
        fill="none"
        stroke="#173A52"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <circle cx="29.2" cy="34.1" r="2.4" fill="#0F2233" />
      <circle cx="36.4" cy="34.1" r="2.4" fill="#0F2233" opacity="0.9" />
      <path
        d="M30 41.3c2.1 1.6 4.4 1.6 6.6 0"
        fill="none"
        stroke="#173A52"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="26.9" cy="38.1" r="2.1" fill="#FFB3C2" opacity="0.9" />
      <circle cx="40.8" cy="38.1" r="2.1" fill="#FFB3C2" opacity="0.9" />
    </svg>
  );
}

type JavanImageVariant = "card" | "banner" | "strip";

function JavanImage({
  src,
  alt,
  variant = "banner",
}: {
  src: string;
  alt: string;
  variant?: JavanImageVariant;
}) {
  return (
    <figure className={`javanFigure javanFigure--${variant}`}>
      <img className="javanImg" src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

function App() {
  const nav = useMemo(
    () => [
      { id: "top", label: "Đầu trang" },
      { id: "muc-1", label: "Thực trạng" },
      { id: "muc-2", label: "Nguyên nhân" },
      { id: "muc-3", label: "Nỗ lực" },
      { id: "muc-5", label: "Hậu quả" },
      { id: "muc-6", label: "Lợi ích" },
    ],
    [],
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const topbar = document.querySelector<HTMLElement>(".topbar");
    const headerHeight = topbar?.getBoundingClientRect().height ?? 0;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

  return (
    <div className="rhinoPage">
      <header className="topbar">
        <div className="topbarInner">
          <button
            className="brand"
            type="button"
            onClick={() => scrollTo("top")}
            aria-label="Về đầu trang"
          >
            <RhinoMark />
            <span className="brandText">TÊ GIÁC JAVAN</span>
          </button>

          <nav className="nav" aria-label="Điều hướng">
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                className="navLink"
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="content">
        <section className="hero heroSlim">
          <div className="heroGrid heroGridSingle">
            <div className="heroCopy">
              <div className="eyebrow">
                Báo cáo tình hình — tê giác một sừng (Javan)
              </div>
              <h1 className="heroTitle">
                Tình trạng săn bắn tê giác Javan hiện nay
              </h1>
              <p className="heroLead">
                Tình trạng săn bắn tê giác Javan được xếp vào mức báo động đỏ,
                dù các biện pháp bảo vệ đã được thắt chặt tối đa.
              </p>
              <div className="heroButtons">
                <button
                  type="button"
                  className="btn btnPrimary"
                  onClick={() => scrollTo("muc-1")}
                >
                  Đọc thực trạng
                </button>
                <button
                  type="button"
                  className="btn btnGhost"
                  onClick={() => scrollTo("muc-5")}
                >
                  Hậu quả &amp; kịch bản
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section sectionAlt" id="javan">
          <div className="sectionInner javanSection">
            <div className="javanBlock" id="muc-1">
              <h2 className="javanH2">1. Thực trạng</h2>

              <div className="grid grid2 javanGrid javanSplit">
                <article className="card javanCard" id="muc-1a">
                  <div className="javanCardTag">a) Tại Việt Nam</div>
                  <JavanImage
                    variant="card"
                    src="/1.jpg"
                    alt="Minh họa mục 1a — tê giác Javan tại Việt Nam"
                  />
                  <h3 className="javanH4">Đã tuyệt chủng do săn bắn</h3>
                  <p className="cardText">
                    Vào năm 2010, cá thể tê giác Javan cuối cùng tại Việt Nam đã
                    bị sát hại tại Vườn quốc gia Cát Tiên. Con vật được tìm thấy
                    trong tình trạng bị bắn vào chân và bị cắt mất sừng. Đến năm
                    2011, tổ chức WWF chính thức tuyên bố loài này đã tuyệt
                    chủng tại Việt Nam.
                  </p>
                </article>

                <article className="card javanCard" id="muc-1b">
                  <div className="javanCardTag">b) Tại Indonesia</div>
                  <JavanImage
                    variant="card"
                    src="/2.jpg"
                    alt="Minh họa mục 1b — tê giác Javan tại Indonesia"
                  />
                  <h3 className="javanH4">
                    Mối đe dọa từ các băng nhóm tội phạm
                  </h3>
                  <p className="cardText javanIntro1b">
                    Hiện nay, toàn bộ quần thể tê giác Javan còn lại (khoảng 80
                    con) chỉ sống tại Vườn quốc gia Ujung Kulon. Tuy nhiên, tình
                    hình đang rất căng thẳng — chạm từng ý bên dưới để xem chi
                    tiết:
                  </p>

                  <div className="javanSubPoints">
                    <details className="javanSubPointDetails" id="muc-1b-1">
                      <summary className="javanSubPointSummary">
                        <span className="javanSubPointMark" aria-hidden="true">
                          1
                        </span>
                        <span className="javanSubPointTitle">
                          Sự trỗi dậy của săn trộm
                        </span>
                      </summary>
                      <p className="javanSubPointText">
                        Sau nhiều thập kỷ không có ghi nhận về săn bắn, từ năm
                        2022 đến 2023, các nhà chức trách Indonesia đã phát hiện
                        ít nhất 26 con tê giác bị giết hại bởi các băng nhóm săn
                        trộm chuyên nghiệp.
                      </p>
                    </details>
                    <details className="javanSubPointDetails" id="muc-1b-2">
                      <summary className="javanSubPointSummary">
                        <span className="javanSubPointMark" aria-hidden="true">
                          2
                        </span>
                        <span className="javanSubPointTitle">
                          Thủ đoạn tinh vi
                        </span>
                      </summary>
                      <p className="javanSubPointText">
                        Những kẻ săn trộm sử dụng súng tự chế, bẫy và lợi dụng
                        các kẽ hở trong hệ thống giám sát camera để đột nhập vào
                        vùng lõi của vườn quốc gia.
                      </p>
                    </details>
                    <details className="javanSubPointDetails" id="muc-1b-3">
                      <summary className="javanSubPointSummary">
                        <span className="javanSubPointMark" aria-hidden="true">
                          3
                        </span>
                        <span className="javanSubPointTitle">
                          Mạng lưới xuyên quốc gia
                        </span>
                      </summary>
                      <p className="javanSubPointText">
                        Sừng tê giác sau khi bị cắt trộm thường được tuồn sang
                        các thị trường chợ đen tại châu Á (đặc biệt là Trung Quốc
                        và Việt Nam) để làm dược liệu hoặc đồ trang trí xa xỉ.
                      </p>
                    </details>
                  </div>
                </article>
              </div>
            </div>

            <div className="javanBlock" id="muc-2">
              <h2 className="javanH2">2. Nguyên nhân duy trì nạn săn bắn</h2>
              <div className="javanMedia">
                <JavanImage
                  variant="banner"
                  src="/3.jpg"
                  alt="Minh họa mục 2 — nguyên nhân săn bắn"
                />
              </div>
              <div className="grid grid2 javanCardGrid">
                <div className="card">
                  <div className="cardIcon">💰</div>
                  <h3 className="cardTitle">Giá trị kinh tế cực cao</h3>
                  <p className="cardText">
                    Sừng tê giác Javan được đồn thổi là có đặc tính chữa bệnh
                    thần kỳ, khiến giá của nó trên thị trường đen đôi khi còn
                    cao hơn vàng hoặc ma túy.
                  </p>
                </div>
                <div className="card">
                  <div className="cardIcon">📍</div>
                  <h3 className="cardTitle">Quần thể tập trung quá hẹp</h3>
                  <p className="cardText">
                    Vì tất cả cá thể chỉ sống ở một khu vực duy nhất, chỉ cần
                    một nhóm săn trộm lọt lưới cũng có thể quét sạch một phần
                    lớn nguồn gene của loài.
                  </p>
                </div>
              </div>
            </div>

            <div className="javanBlock" id="muc-3">
              <h2 className="javanH2">3. Các nỗ lực ngăn chặn</h2>
              <div className="javanMedia">
                <JavanImage
                  variant="banner"
                  src="/4.jpg"
                  alt="Minh họa mục 3 — nỗ lực bảo vệ"
                />
              </div>
              <div className="grid grid3 javanCardGrid">
                <div className="card">
                  <div className="cardIcon">🛡️</div>
                  <h3 className="cardTitle">Tuần tra vũ trang</h3>
                  <p className="cardText">
                    Chính phủ Indonesia đã tăng cường các đội phản ứng nhanh
                    (RPU) tuần tra 24/7.
                  </p>
                </div>
                <div className="card">
                  <div className="cardIcon">📡</div>
                  <h3 className="cardTitle">Giám sát công nghệ cao</h3>
                  <p className="cardText">
                    Sử dụng drone, bẫy ảnh hiện đại và chip định vị để theo dõi
                    các cá thể còn lại.
                  </p>
                </div>
                <div className="card">
                  <div className="cardIcon">⚖️</div>
                  <h3 className="cardTitle">Thắt chặt pháp luật</h3>
                  <p className="cardText">
                    Áp dụng các khung hình phạt tù nghiêm khắc đối với những kẻ
                    buôn lậu và tàng trữ sừng tê giác.
                  </p>
                </div>
              </div>
            </div>

            <div className="javanBlock" id="muc-5">
              <h2 className="javanH2">
                5. Hậu quả nếu bị săn bắn quá nhiều (kịch bản tuyệt chủng)
              </h2>
              <div className="javanMedia">
                <JavanImage
                  variant="banner"
                  src="/5.jpg"
                  alt="Minh họa mục 5 — hậu quả và kịch bản tuyệt chủng"
                />
              </div>
              <div className="grid grid3 javanCardGrid">
                <div className="card cardThreat">
                  <div className="cardIcon">🧬</div>
                  <h3 className="cardTitle">Mất đa dạng di truyền</h3>
                  <p className="cardText">
                    Khi số lượng cá thể giảm xuống quá thấp (dưới mức 80 con
                    hiện tại), hiện tượng giao phối cận huyết sẽ xảy ra, dẫn đến
                    các đột biến có hại và suy giảm khả năng sinh sản.
                  </p>
                </div>
                <div className="card cardThreat">
                  <div className="cardIcon">🌳</div>
                  <h3 className="cardTitle">Sụp đổ hệ sinh thái</h3>
                  <p className="cardText">
                    Tê giác Javan là &quot;kỹ sư&quot; của rừng già: phát tán
                    hạt giống qua phân và tạo khoảng trống khi di chuyển, giúp
                    thực vật tầng thấp phát triển. Mất chúng, cấu trúc rừng sẽ
                    thay đổi.
                  </p>
                </div>
                <div className="card cardThreat">
                  <div className="cardIcon">⛔</div>
                  <h3 className="cardTitle">Tuyệt chủng vĩnh viễn</h3>
                  <p className="cardText">
                    Vì đây là loài chỉ còn một quần thể duy nhất tại Indonesia,
                    nếu nạn săn bắn tiếp diễn, loài này sẽ biến mất hoàn toàn
                    khỏi Trái Đất — tương tự phân loài tại Việt Nam năm 2010.
                  </p>
                </div>
              </div>
            </div>

            <div className="javanBlock javanBlockLast" id="muc-6">
              <h2 className="javanH2">
                6. Lợi ích nếu được bảo vệ tốt (kịch bản phục hồi)
              </h2>
              <div
                className="javanPhotoStrip"
                role="group"
                aria-label="Minh họa mục 6"
              >
                <JavanImage
                  variant="strip"
                  src="/6.jpg"
                  alt="Minh họa mục 6 — lợi ích phục hồi (hình 6)"
                />
                <JavanImage
                  variant="strip"
                  src="/7.jpg"
                  alt="Minh họa mục 6 — lợi ích phục hồi (hình 7)"
                />
                <JavanImage
                  variant="strip"
                  src="/8.jpg"
                  alt="Minh họa mục 6 — lợi ích phục hồi (hình 8)"
                />
              </div>
              <div className="grid grid2 gridBenefits">
                <div className="card">
                  <div className="cardIcon">📈</div>
                  <h3 className="cardTitle">Ổn định và phát triển quần thể</h3>
                  <p className="cardText">
                    Bảo vệ nghiêm ngặt giúp tỉ lệ sinh cao hơn tỉ lệ tử, đưa số
                    lượng cá thể vượt qua ngưỡng nguy hiểm (ví dụ mục tiêu đạt
                    trên 100–200 con).
                  </p>
                </div>
                <div className="card">
                  <div className="cardIcon">🗺️</div>
                  <h3 className="cardTitle">Mở rộng địa bàn cư trú</h3>
                  <p className="cardText">
                    Khi số lượng tăng, có thể thiết lập quần thể thứ hai ở khu
                    vực an toàn khác để tránh rủi ro thiên tai (như núi lửa,
                    sóng thần) hoặc dịch bệnh quét sạch toàn bộ loài tại Ujung
                    Kulon.
                  </p>
                </div>
                <div className="card">
                  <div className="cardIcon">🌏</div>
                  <h3 className="cardTitle">Biểu tượng bảo tồn</h3>
                  <p className="cardText">
                    Sự hồi sinh của tê giác Javan là minh chứng cho thành công
                    quốc tế, thúc đẩy du lịch sinh thái bền vững và ý thức bảo
                    vệ môi trường địa phương.
                  </p>
                </div>
                <div className="card">
                  <div className="cardIcon">🌿</div>
                  <h3 className="cardTitle">Cân bằng tự nhiên</h3>
                  <p className="cardText">
                    Giữ vững chuỗi thức ăn và đa dạng sinh học đặc trưng của
                    rừng mưa nhiệt đới Đông Nam Á.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footerInner">
            <div className="footerBrand">
              <RhinoMark />
              <div className="footerTitle">
                Tê giác Javan — tài liệu tham khảo
              </div>
            </div>
            <div className="footerLinks">
              <button
                type="button"
                className="linkBtn"
                onClick={() => scrollTo("muc-1")}
              >
                Thực trạng
              </button>
              <button
                type="button"
                className="linkBtn"
                onClick={() => scrollTo("muc-5")}
              >
                Hậu quả
              </button>
              <button
                type="button"
                className="linkBtn"
                onClick={() => scrollTo("muc-6")}
              >
                Lợi ích phục hồi
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
