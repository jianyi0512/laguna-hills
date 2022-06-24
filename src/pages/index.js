import Layout from '../components/layout'
import Phyer from "../components/phyer"
import Seo from '../components/seo'
import 'bootstrap/dist/css/bootstrap.min.css'

const Index = () => {
  let title = "Laguna Hills, Inc. Home"

  return (
    <Layout title={title}>
      <Seo title="Laguna Hills, Inc." description="映像・音響システム　制御会社です。" />
      <article className="mt-5 mb-5 pt-5">
        <Phyer />
        <div className="mt-5 pt-3 container w-50 text-center">
          <h3 >お知らせ</h3>
          <p>新型コロナウィルス（COVID-19）の感染予防を目的とした時差通勤の為、<br/>弊社の営業時間を、平日10:30〜16:30に変更させていただきます。</p>
        </div>
      </article>
    </Layout>
  )
}

export default Index
