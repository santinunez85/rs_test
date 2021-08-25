import type { NextPage } from 'next';

import Jumbotron from '../components/jumbotron/jumbotron';
import TeaserList from '../components/teaser-list/teaser-list';

const Home: NextPage = () => {
  return (
    <>
      <Jumbotron/>
      <TeaserList/>
    </>
  )
}

export default Home
