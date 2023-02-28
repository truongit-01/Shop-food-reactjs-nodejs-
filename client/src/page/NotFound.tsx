export default function NotFound() {
  return (
    <div style={{ paddingTop: '60px', position: 'relative' }} className='container-fluid wrapp_notfound'>
      <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/404_4000x4000.jpg?v=1558062919' alt='' style={{ width: '100%' }} />

      <div style={{ position: 'absolute', bottom: '43%', left: '17%', width: '40%' }}>
        <p> <b style={{ fontSize: '110px', textAlign: 'center', marginLeft: '30%' }}>404</b></p>

        <p className='content__notFound' >OOPS... THE PAGE YOU LOOKING FOR CLOCKED OUT!</p>

        <div className='btn-group-notfound'>
          <div><p>Return to store</p></div>
          <div><p>Shop the collections</p></div>
        </div>
      </div>
    </div>
  )
}
