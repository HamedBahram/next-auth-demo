import UserProfileForm from '../components/UserProfileForm'

const Page = async () => {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>Profile</h1>

        <UserProfileForm />
      </div>
    </section>
  )
}

export default Page
