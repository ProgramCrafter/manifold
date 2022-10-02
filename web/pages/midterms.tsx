import { Col } from 'web/components/layout/col'
import { Spacer } from 'web/components/layout/spacer'
import { Page } from 'web/components/page'
import { Title } from 'web/components/title'
import {
  StateElectionMarket,
  StateElectionMap,
} from 'web/components/usa-map/state-election-map'

const senateMidterms: StateElectionMarket[] = [
  {
    state: 'AZ',
    creatorUsername: 'BTE',
    slug: 'will-blake-masters-win-the-arizona',
    isWinRepublican: true,
  },
  {
    state: 'OH',
    creatorUsername: 'BTE',
    slug: 'will-jd-vance-win-the-ohio-senate-s',
    isWinRepublican: true,
  },
  {
    state: 'WI',
    creatorUsername: 'BTE',
    slug: 'will-ron-johnson-be-reelected-in-th',
    isWinRepublican: true,
  },
  {
    state: 'FL',
    creatorUsername: 'BTE',
    slug: 'will-marco-rubio-be-reelected-to-th',
    isWinRepublican: true,
  },
  {
    state: 'PA',
    creatorUsername: 'MattP',
    slug: 'will-dr-oz-be-elected-to-the-us-sen',
    isWinRepublican: true,
  },
  {
    state: 'GA',
    creatorUsername: 'NcyRocks',
    slug: 'will-a-democrat-win-the-2022-us-sen-3d2432ba6d79',
    isWinRepublican: false,
  },
  {
    state: 'NV',
    creatorUsername: 'NcyRocks',
    slug: 'will-a-democrat-win-the-2022-us-sen',
    isWinRepublican: false,
  },
  {
    state: 'NC',
    creatorUsername: 'NcyRocks',
    slug: 'will-a-democrat-win-the-2022-us-sen-6f1a901e1fcf',
    isWinRepublican: false,
  },
  {
    state: 'NH',
    creatorUsername: 'NcyRocks',
    slug: 'will-a-democrat-win-the-2022-us-sen-23194a72f1b7',
    isWinRepublican: false,
  },
  {
    state: 'UT',
    creatorUsername: 'SG',
    slug: 'will-mike-lee-win-the-2022-utah-sen',
    isWinRepublican: true,
  },
  {
    state: 'CO',
    creatorUsername: 'SG',
    slug: 'will-michael-bennet-win-the-2022-co',
    isWinRepublican: false,
  },
]

const governorMidterms: StateElectionMarket[] = [
  {
    state: 'TX',
    creatorUsername: 'LarsDoucet',
    slug: 'republicans-will-win-the-2022-texas',
    isWinRepublican: true,
  },
  {
    state: 'GA',
    creatorUsername: 'MattP',
    slug: 'will-stacey-abrams-win-the-2022-geo',
    isWinRepublican: false,
  },
  {
    state: 'FL',
    creatorUsername: 'Tetraspace',
    slug: 'if-charlie-crist-is-the-democratic',
    isWinRepublican: false,
  },
  {
    state: 'PA',
    creatorUsername: 'JonathanMast',
    slug: 'will-josh-shapiro-win-the-2022-penn',
    isWinRepublican: false,
  },
  {
    state: 'PA',
    creatorUsername: 'JonathanMast',
    slug: 'will-josh-shapiro-win-the-2022-penn',
    isWinRepublican: false,
  },
  {
    state: 'CO',
    creatorUsername: 'ScottLawrence',
    slug: 'will-jared-polis-be-reelected-as-co',
    isWinRepublican: false,
  },
  {
    state: 'OR',
    creatorUsername: 'Tetraspace',
    slug: 'if-tina-kotek-is-the-2022-democrati',
    isWinRepublican: false,
  },
  {
    state: 'MD',
    creatorUsername: 'Tetraspace',
    slug: 'if-wes-moore-is-the-2022-democratic',
    isWinRepublican: false,
  },
  {
    state: 'AK',
    creatorUsername: 'SG',
    slug: 'will-a-republican-win-the-2022-alas',
    isWinRepublican: true,
  },
  {
    state: 'AZ',
    creatorUsername: 'SG',
    slug: 'will-a-republican-win-the-2022-ariz',
    isWinRepublican: true,
  },
  {
    state: 'AZ',
    creatorUsername: 'SG',
    slug: 'will-a-republican-win-the-2022-ariz',
    isWinRepublican: true,
  },
  {
    state: 'WI',
    creatorUsername: 'SG',
    slug: 'will-a-democrat-win-the-2022-wiscon',
    isWinRepublican: false,
  },
  {
    state: 'NV',
    creatorUsername: 'SG',
    slug: 'will-a-democrat-win-the-2022-nevada',
    isWinRepublican: false,
  },
  {
    state: 'KS',
    creatorUsername: 'SG',
    slug: 'will-a-democrat-win-the-2022-kansas',
    isWinRepublican: false,
  },
  {
    state: 'NV',
    creatorUsername: 'SG',
    slug: 'will-a-democrat-win-the-2022-new-me',
    isWinRepublican: false,
  },
  {
    state: 'ME',
    creatorUsername: 'SG',
    slug: 'will-a-democrat-win-the-2022-maine',
    isWinRepublican: false,
  },
]

const App = () => {
  return (
    <Page className="">
      <Col className="items-center justify-center">
        <Title text="2022 US Midterm Elections" className="mt-2" />
        <div className="mt-2 text-2xl">Senate</div>
        <StateElectionMap markets={senateMidterms} />
        <iframe
          src="https://manifold.markets/TomShlomi/will-the-gop-control-the-us-senate"
          title="Will the Democrats control the Senate after the Midterms?"
          frameBorder="0"
          width={800}
          height={400}
          className="mt-8"
        ></iframe>
        <Spacer h={8} />
        <div className="mt-8 text-2xl">Governors</div>
        <StateElectionMap markets={governorMidterms} />
        <iframe
          src="https://manifold.markets/ManifoldMarkets/democrats-go-down-at-least-one-gove"
          title="Democrats go down at least one governor on net in 2022"
          frameBorder="0"
          width={800}
          height={400}
          className="mt-8"
        ></iframe>
        <Spacer h={8} />
        <div className="mt-8 text-2xl">House</div>
        <iframe
          src="https://manifold.markets/BoltonBailey/will-democrats-maintain-control-of"
          title="Will the Democrats control the House after the Midterms?"
          frameBorder="0"
          width={800}
          height={400}
          className="mt-8"
        ></iframe>
        <Spacer h={8} />
        <div className="mt-8 text-2xl">Related markets</div>
        <iframe
          src="https://manifold.markets/BoltonBailey/balance-of-power-in-us-congress-aft"
          title="Balance of Power in US Congress after 2022 Midterms"
          frameBorder="0"
          width={800}
          height={400}
          className="mt-8"
        ></iframe>
        <iframe
          src="https://manifold.markets/SG/will-a-democrat-win-the-2024-us-pre"
          title="Will a Democrat win the 2024 US presidential election?"
          frameBorder="0"
          width={800}
          height={400}
          className="mt-8"
        ></iframe>
        <iframe
          src="https://manifold.markets/Ibozz91/will-the-2022-alaska-house-general"
          title="Will the 2022 Alaska House General Nonspecial Election result in a Condorcet failure?"
          frameBorder="0"
          width={800}
          height={400}
          className="mt-8"
        ></iframe>

        <iframe
          src="https://manifold.markets/NathanpmYoung/how-many-supreme-court-justices-wil-1e597c3853ad"
          title="Will the 2022 Alaska House General Nonspecial Election result in a Condorcet failure?"
          frameBorder="0"
          width={800}
          height={400}
          className="mt-8"
        ></iframe>
      </Col>
    </Page>
  )
}

export default App
