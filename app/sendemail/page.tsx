import { cryptoRandomStringAsync } from 'crypto-random-string'
import { sendEmail } from './mail'

const Page = () => {
  const generateOTP = async () => {
    const newOtp = await cryptoRandomStringAsync({
      length: 6,
      characters: '0123456789',
    })
    console.log(newOtp)
    try {
      await sendEmail(
        'seshagiri.innamuri@gmail.com',
        'OTP for login to MoviePosters ',
        newOtp
      )
      console.log('maile sent successfully')
    } catch (e) {
      console.log('error occurred: ', e)
    }
  }
  generateOTP()

  return (
    <div>
      <h1 className='text-xl font-semibold'>mail sent</h1>
    </div>
  )
}

export default Page
