import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import './App.css'

function RhinoMark() {
  // Cartoon rhino mark (inline SVG so no extra assets needed).
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
  )
}

type SubmitState = 'idle' | 'success' | 'error'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function RhinoFigure() {
  return (
    <figure className="rhinoFigure">
      <img
        className="rhinoImage"
        src="/te-giac.jpg"
        alt="Hình minh họa tê giác"
        loading="lazy"
      />
    </figure>
  )
}

function App() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<SubmitState>('idle')

  const nav = useMemo(
    () => [
      { id: 'why', label: 'Vì sao?' },
      { id: 'threats', label: 'Nguy hiểm gì?' },
      { id: 'actions', label: 'Việc của bạn' },
      { id: 'action', label: 'Làm ngay' }
    ],
    []
  )

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const topbar = document.querySelector<HTMLElement>('.topbar')
    const headerHeight = topbar?.getBoundingClientRect().height ?? 0
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setState('error')
      return
    }
    // This is a front-end only demo; no real submission happens.
    setState('success')
  }

  return (
    <div className="rhinoPage">
      <header className="topbar">
        <div className="topbarInner">
          <button
            className="brand"
            type="button"
            onClick={() => scrollTo('top')}
            aria-label="Về đầu trang"
          >
            <RhinoMark />
            <span className="brandText">BẢO TỒN TÊ GIÁC</span>
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
        <section className="hero">
          <div className="heroGrid">
            <div className="heroCopy">
              <div className="eyebrow">Khám phá tê giác và bài toán bảo tồn</div>
              <h1 className="heroTitle">
                Tê giác cần được bảo vệ bền vững
              </h1>
              <p className="heroLead">
                Trong báo cáo infographic này, bạn sẽ thấy vì sao tê giác quan
                trọng và đâu là 3 việc thiết thực để góp phần bảo tồn.
              </p>

              <div className="heroButtons">
                <button
                  type="button"
                  className="btn btnPrimary"
                  onClick={() => scrollTo('action')}
                >
                  Bắt đầu học
                </button>
                <button
                  type="button"
                  className="btn btnGhost"
                  onClick={() => scrollTo('threats')}
                >
                  Xem điều nguy hiểm
                </button>
              </div>
            </div>

            <aside className="heroCard" aria-label="Thông tin nhanh">
              <div className="heroCardHeader">
                <div className="chip">Gợi ý nhanh</div>
                <div className="heroCardTitle">
                  Chọn 1 việc phù hợp với bạn
                </div>
              </div>
              <div className="mascotWrap" aria-hidden="true">
                <RhinoFigure />
              </div>
              <div className="heroStats">
                <div className="stat">
                  <div className="statLabel">Ý nghĩa</div>
                  <div className="statValue">
                    Tê giác và cân bằng hệ sinh thái
                  </div>
                </div>
                <div className="stat">
                  <div className="statLabel">Lưu ý</div>
                  <div className="statValue">Hiểu đúng để lan tỏa đúng</div>
                </div>
                <div className="stat">
                  <div className="statLabel">Việc nhỏ</div>
                  <div className="statValue">Chia sẻ và hành động vừa sức</div>
                </div>
              </div>
              <div className="heroCardFooter">
                <button
                  type="button"
                  className="btn btnCard"
                  onClick={() => scrollTo('actions')}
                >
                  Xem 3 việc thiết thực
                </button>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="why">
          <div className="sectionInner">
            <div className="sectionHead">
              <h2 className="sectionTitle">Tê giác và cân bằng sinh thái</h2>
              <p className="sectionDesc">
                Khi quần thể được bảo vệ, nhiều loài khác cũng có cơ hội sống ổn
                định hơn trong hệ sinh thái.
              </p>
            </div>

            <div className="grid grid3">
              <div className="card">
                <div className="cardIcon">🌿</div>
                <h3 className="cardTitle">Duy trì nhịp hệ sinh thái</h3>
                <p className="cardText">
                  Nơi sống an toàn giúp các loài khác tìm thức ăn tốt hơn.
                </p>
              </div>
              <div className="card">
                <div className="cardIcon">🛡️</div>
                <h3 className="cardTitle">Giảm rủi ro sinh học</h3>
                <p className="cardText">
                  Bảo tồn tê giác góp phần bảo vệ môi trường xung quanh.
                </p>
              </div>
              <div className="card">
                <div className="cardIcon">📣</div>
                <h3 className="cardTitle">Nâng hiểu biết cộng đồng</h3>
                <p className="cardText">
                  Kiến thức giúp giảm hành vi gây hại và tăng đồng thuận.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section sectionAlt" id="threats">
          <div className="sectionInner">
            <div className="sectionHead">
              <h2 className="sectionTitle">Những yếu tố làm loài suy giảm</h2>
              <p className="sectionDesc">
                Loài có thể đối mặt với săn bắt trái phép và mất nơi sống, khiến
                việc phục hồi trở nên khó khăn hơn.
              </p>
            </div>

            <div className="grid grid3">
              <div className="card cardThreat">
                <div className="cardIcon">🚫</div>
                <h3 className="cardTitle">Nguy cơ săn trộm</h3>
                <p className="cardText">
                  Săn trộm trái phép làm tê giác bị bắt đi khỏi rừng.
                </p>
              </div>
              <div className="card cardThreat">
                <div className="cardIcon">🏞️</div>
                <h3 className="cardTitle">Mất nơi sống</h3>
                <p className="cardText">
                  Nơi rừng bị thu hẹp khiến tê giác khó tìm thức ăn và nơi trú ẩn.
                </p>
              </div>
              <div className="card cardThreat">
                <div className="cardIcon">🤝</div>
                <h3 className="cardTitle">Khó chung sống</h3>
                <p className="cardText">
                  Khi con người và động vật không hiểu nhau, tê giác dễ gặp rắc rối.
                </p>
              </div>
            </div>

            <div className="inlineRhino" aria-label="Hình minh họa tư liệu">
              <img
                className="inlineRhinoImg"
                src="/te-giac-2.jpg"
                alt="Ảnh minh họa tê giác trong tài liệu (demo)"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="section" id="actions">
          <div className="sectionInner">
            <div className="sectionHead">
              <h2 className="sectionTitle">3 việc bạn có thể bắt đầu</h2>
              <p className="sectionDesc">
                Chỉ cần vài bước đơn giản để tham gia theo cách phù hợp.
              </p>
            </div>

            <div className="grid grid3">
              <div className="card cardStep">
                <div className="stepNum">1</div>
                <h3 className="cardTitle">Chia sẻ điều đúng</h3>
                <p className="cardText">
                  Nói với bạn bè về tê giác và cách bảo vệ chúng.
                </p>
              </div>
              <div className="card cardStep">
                <div className="stepNum">2</div>
                <h3 className="cardTitle">Hỗ trợ hoạt động bảo tồn</h3>
                <p className="cardText">
                  Chọn chương trình minh bạch để giúp cứu hộ và phục hồi nơi sống.
                </p>
              </div>
              <div className="card cardStep">
                <div className="stepNum">3</div>
                <h3 className="cardTitle">Góp sức bằng giáo dục</h3>
                <p className="cardText">
                  Cập nhật kiến thức, học thêm và lan tỏa thông tin đúng cách.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section sectionAlt" id="action">
          <div className="sectionInner">
            <div className="cta">
              <div className="ctaCopy">
                <h2 className="sectionTitle">Nhận bản tóm tắt (demo)</h2>
                <p className="sectionDesc">
                  Nhập email để nhận bản tóm tắt các việc thiết thực. Đây là
                  form minh họa (demo).
                </p>
              </div>

              <form className="ctaForm" onSubmit={onSubmit}>
                <label className="field">
                  <span className="fieldLabel">Email</span>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setState('idle')
                    }}
                    className="input"
                    type="email"
                    placeholder="ten@email.com"
                    required
                  />
                </label>

                <button type="submit" className="btn btnPrimary btnWide">
                  Nhận bản tóm tắt
                </button>

                <div
                  className={
                    state === 'success'
                      ? 'formMsg formMsgSuccess'
                      : state === 'error'
                        ? 'formMsg formMsgError'
                        : 'formMsg'
                  }
                  aria-live="polite"
                >
                  {state === 'idle' && 'Mình sẽ gửi bản tóm tắt (demo).'}
                  {state === 'success' && 'Thành công! (demo) Mình đã ghi nhận email.'}
                  {state === 'error' && 'Email chưa đúng. Bạn kiểm tra lại giúp mình nhé.'}
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footerInner">
            <div className="footerBrand">
              <RhinoMark />
              <div className="footerTitle">Bảo tồn tê giác</div>
            </div>
            <div className="footerLinks">
              <button type="button" className="linkBtn" onClick={() => scrollTo('why')}>
                Vì sao tê giác quan trọng
              </button>
              <button
                type="button"
                className="linkBtn"
                onClick={() => scrollTo('threats')}
              >
                Nguy hiểm gì?
              </button>
              <button
                type="button"
                className="linkBtn"
                onClick={() => scrollTo('action')}
              >
                Nhận bản tóm tắt
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
