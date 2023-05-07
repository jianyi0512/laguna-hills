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
        <div className="mt-5 pt-3 container  text-center">
          <h3 >お知らせ</h3>
          {/* <h5><span className="badge bg-danger">New!</span>　Dataton 新製品WATCHPAX42　発売開始！</h5>
          <h5><span className="badge bg-primary">Info!</span>　Dataton 新製品WATCHPAX62　まもなく発売開始！</h5> */}
          <p>営業時間変更のお知らせ。<br/>営業時間を、平日10:00〜17:00とさせていただきます。</p>
        </div>
      </article>
    </Layout>
  )
}

export default Index
