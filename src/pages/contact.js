import Layout from '../components/layout'
import Seo from '../components/seo'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contact = () => {
    let title = "Laguna Hills, Inc. Contact"
  return (
    <Layout title={title}>
     <Seo title="問合せ | Laguna Hills, Inc." description="問合せ" /> 
      <article className="mt-5 pt-3 container w-50">
        <h3 className="pt-3 text-center">問合せフォーム</h3>
        <p className="text-end">*営業目的のお問合せは、ご遠慮ください。</p>
        <hr />
        <form action="https://getform.io/f/1f3c37e7-2fcb-490b-8707-f0f7fc202360" method="POST" className="mt-5 container w-75">
          <div className="container bg-light">
            <div className="row justify-content-center pt-5">
              <div className="col-4">
                <label for="name" >お名前</label>
              </div>
              <div className="col-6">
                <input name="name" type="text" required></input>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-4">
                <label name="company">会社名</label>
              </div>
              <div className="col-6">
                <input type="text" name="company" required></input>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-4">
                <label for=""email>メールアドレス</label>
              </div>
              <div className="col-6">
                <input type="mail" name='email' required></input>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-4">
                <label>問合せ製品</label>
              </div>
              <div className="col-6 mt-4">
                
                <label for="dataton">
                  <input type="radio" name="company" value="dataton" id="dataton" />
                  　Dataton製品について
                </label>
                
                <label for="pixilab">
                  <input type="radio" name="company" value="pixilab" id="pixilab" />
                  　PixiLAB製品について
                </label>

                <label for="plura">
                  <input type="radio" name="company" value="plura" id="plura" />
                  　Plura製品について
                </label>

                <label for="auvitran">
                  <input type="radio" name="company" value="auvitran" id="auvitran" />
                  　AuviTran製品について
                </label>

                <label for="buttkicker">
                  <input type="radio" name="company" value="buttkicker" id="buttkicker" />
                  　Buttkicker製品について
                </label>

                <label for="system7000">
                  <input type="radio" name="company" value="system7000" id="system7000" />
                  　制御システム開発について
                </label>
              </div>
            </div> 

            <div className="row justify-content-center mt-5">
              <div className="col-4">
                <label for="content">問い合わせ内容</label>
              </div>
              <div className="col-6"></div>
                <textarea type="text" name="content" required />
            </div>
            <div className="row justify-content-center  w-50 mt-5 mx-auto pb-5">
              <input type="submit" value="送信" class="btn btn-primary py-2"></input>
            </div>
          </div>
        </form>

      </article>

    </Layout>
  )
}

export default Contact
