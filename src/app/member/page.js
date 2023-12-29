import IconDot from '../../assets/dog-dot.png'
import Image from 'next/image'
import Card1 from '../components/Card1'

function member() {
  return (
    <div className="bg-white text-black min-w-full dark:bg-orange-200">
      <div className='container mx-auto dark:bg-orange-200 min-h-screen'>
        <div className=" font-kosugi p-4 text-3xl flex items-center bg-orange-300">
          <div className='text-white font-bold [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]'>
            メンバー
          </div>
          <Image src={IconDot} width={70} height={70}  />
        </div>
        <div className="flex">
          <Card1 />
        </div>
      </div>
    </div>
  )
}

export default member