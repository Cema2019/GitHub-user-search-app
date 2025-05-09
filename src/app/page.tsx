import FormSearch from "./components/SearchBar";
import UserCardInfo from "./components/UserCardInfo";
import { User, FormSearchProps } from './types'

const Home = async ({ searchParams }: {
  searchParams: { username?: string }
}) => {

  const username = searchParams?.username || 'octocat'
  let user: User | null = null
  let error = ''

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { tags: ['user'] }
    })

    if (!res.ok) throw new Error('User not found')
    user = await res.json()
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to fetch user'
  }

  return (
    <>
      <FormSearch initialUsername={username} error={error} />
      {user && <UserCardInfo user={user} />}
    </>
  );

};
export default Home;
