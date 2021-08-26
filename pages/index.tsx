import type { NextPage } from 'next';

import Jumbotron from '../components/jumbotron/jumbotron';
import TeaserList from '../components/teaser-list/teaser-list';

const Home: NextPage = () => {
  return (
    <main>
      <Jumbotron/>
      <TeaserList/>
    </main>
  )
}

export default Home
