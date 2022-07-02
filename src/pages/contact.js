import { appendErrors, useForm } from 'react-hook-form'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contact = () => {
  const { register, formState: {errors}, handleSubmit, reset} = useForm();
  const onSubmit = data => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("company", data.company) 
    formData.append("email", data.email)
    formData.append("product", data.product)
    formData.append("message", data.message)
    fetch("https://getform.io/f/1f3c37e7-2fcb-490b-8707-f0f7fc202360", {
      method: "POST",
      body: formData
    })
    .then((response) => {
      console.log(response)
      reset();  
    })
       .catch(error => console.log(error))
  };

    let title = "Laguna Hills, Inc. Contact"

  return (
    <Layout title={title}>
     <Seo title="問合せ | Laguna Hills, Inc." description="問合せ" /> 
      <article className="mt-5 pt-3 container">
        <h3 className="pt-3 text-center">問合せフォーム</h3>
        <p className="text-end">*営業目的のお問合せは、ご遠慮ください。</p>
        <hr />
        <form className="mt-5 container w-75" onSubmit={handleSubmit(onSubmit)}>
        {/* <form action="https://getform.io/f/1f3c37e7-2fcb-490b-8707-f0f7fc202360" method="POST" className="mt-5 container w-75" onSubmit={handleSubmit(onSubmit)}> */}
          <div className="container bg-light">
            <div className="row justify-content-center pt-5">
              <div className="col-4">
                <label >お名前</label>
              </div>
              <div className="col-6">
                <input id="name" type="text" {...register("name", {required: true})} className="form-control" />
                {errors.name && <p className='mt-2 text-danger'>※　お名前を入力してください。</p>}
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-4">
                <label>会社名</label>
              </div>
              <div className="col-6">
                <input type="text" id="company" {...register("company", {required: true})} className="form-control" />
                {errors.company && <p className='mt-2 text-danger'>※　会社名を入力してください。</p>}
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-4">
                <label>メールアドレス</label>
              </div>
              <div className="col-6">
                <input type="mail" id="email" {...register("email", {required: true, pattern:{value: /\S+@\S+\.\S+/ }})} className="form-control" />
                {errors.email && <p className='mt-2 text-danger'>※　メールアドレスをご確認ください。</p>}
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-4">
                <label>問合せ製品</label>
              </div>
              <div className="col-6 mt-4">
                <div>
                  <label>
                    <input {...register("product", { required: true })} type="radio" value="dataton" id="dataton" />
                    　Dataton製品について
                  </label>
                </div>
                <div>
                  <label>
                    <input {...register("product", { required: true })} type="radio" value="pixilab" id="pixilab" />
                    　PixiLAB製品について
                  </label>
                </div>
                <div>
                  <label>
                    <input {...register("product", { required: true })} type="radio" value="plura" id="plura" />
                    　Plura製品について
                  </label>
                </div>
                <div>
                  <label>
                    <input {...register("product", { required: true })} type="radio" value="auvitran" id="auvitran" />
                    　AuviTran製品について
                  </label>
                </div>
                <div>
                  <label>
                    <input {...register("product", { required: true })} type="radio" value="buttkicker" id="buttkicker" />
                    　Buttkicker製品について
                  </label>
                </div>
                <div>
                <label>
                  <input {...register("product", { required: true })} type="radio" value="system7000" id="system7000" />
                  　制御システム開発について
                  {errors.product && <p className='mt-2 text-danger'>※　問合せ製品を選択してください。</p>}
                </label>
                </div>
              </div>
            </div> 

            <div className="row justify-content-center mt-5">
              <div className="col-4">
                <label>問い合わせ内容</label>
              </div>
              <div className='col-6'>
                  <textarea {...register("message", { required: true })} type="text" id="content" className="form-control" />
                  {errors.message && <p className='mt-2 text-danger'>※　問合せ内容を入力してください。</p>}
              </div>
            </div>
            <div className="col-11 mt-5 pb-5 d-flex justify-content-end">
                <input type="submit" value="送　信" className="btn btn-primary"></input>
            </div>
          </div>
        </form>
      </article>
    </Layout>
  )
}

export default Contact
