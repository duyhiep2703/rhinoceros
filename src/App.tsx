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

function RhinoMascot() {
  // Larger cheerful mascot for the hero card.
  return (
    <svg
      className="mascotSvg"
      viewBox="0 0 240 200"
      role="img"
      aria-label="Tê giác hoạt hình"
    >
      <defs>
        <linearGradient id="hornGrad" x1="0" x2="1">
          <stop offset="0" stopColor="#FFD1A8" />
          <stop offset="1" stopColor="#FFB37A" />
        </linearGradient>
        <linearGradient id="cheekGrad" x1="0" x2="1">
          <stop offset="0" stopColor="#FF9AB4" />
          <stop offset="1" stopColor="#FF7EA6" />
        </linearGradient>
      </defs>

      {/* Floating bubbles */}
      <circle cx="52" cy="44" r="18" fill="rgba(102,199,255,0.25)" />
      <circle cx="190" cy="56" r="12" fill="rgba(255,107,107,0.20)" />
      <circle cx="178" cy="148" r="16" fill="rgba(122,229,130,0.18)" />

      {/* Body */}
      <path
        d="M118 24c-38 0-69 28-69 63 0 24 13 42 27 53l-7 28c-4 13 7 26 20 28l34 4c13 2 25-8 27-21l3-16h44l10 30c5 13 19 18 32 13l38-16c12-5 18-19 13-32l-12-32c23-16 37-41 37-68 0-35-29-66-71-66-11 0-22 2-32 6l-40 0z"
        fill="#D9E1F0"
        stroke="#173A52"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Horn */}
      <path
        d="M142 44c13-10 31-10 45 0-15 4-27 14-34 27-4-10-7-18-11-27z"
        fill="url(#hornGrad)"
        stroke="#173A52"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Eyes */}
      {/* Anime-style eyes */}
      <circle cx="98" cy="98" r="12" fill="rgba(255,255,255,0.95)" />
      <circle cx="136" cy="98" r="12" fill="rgba(255,255,255,0.95)" />
      <circle cx="98" cy="98" r="8.2" fill="#2B4C6A" />
      <circle cx="136" cy="98" r="8.2" fill="#2B4C6A" opacity="0.95" />
      <circle cx="98" cy="98" r="4.1" fill="#0F2233" />
      <circle cx="136" cy="98" r="4.1" fill="#0F2233" opacity="0.95" />
      <circle cx="94.2" cy="94.4" r="2.1" fill="#ffffff" opacity="0.95" />
      <circle cx="132.2" cy="94.4" r="2.1" fill="#ffffff" opacity="0.95" />

      {/* Mouth */}
      <path
        d="M112 126c10 7 22 7 32 0"
        fill="none"
        stroke="#173A52"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Cheeks */}
      <circle cx="86" cy="120" r="13" fill="url(#cheekGrad)" opacity="0.85" />
      <circle
        cx="148"
        cy="120"
        r="13"
        fill="url(#cheekGrad)"
        opacity="0.85"
      />
    </svg>
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
                <RhinoMascot />
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
              <div>
                <div className="footerTitle">Bảo tồn tê giác</div>
                <div className="footerText">
                  Infographic anime/hoạt hình · Built with Vite + React
                </div>
              </div>
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
