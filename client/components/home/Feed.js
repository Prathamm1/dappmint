import { BsStars } from "react-icons/bs"
import TweetBox from './TweetBox'
import Post from '../Post'
import { useContext } from "react"
import { TwitterContext } from "../../context/TwitterContext"

const style = {
  wrapper: `flex-[1] border-r border-l border-[#38444d] overflow-auto no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}
function Feed() {
  const {tweets} = useContext(TwitterContext)
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {
        tweets.map((tweet, index) => (
          <Post
            key={index}
            displayName={tweet.author.name}
            userName={`${tweet.author.walletAddress.slice(0, 4)}...${tweet.author.walletAddress.slice(-4)}`}
            avatar={tweet.author.profileImage}
            Text={tweet.tweet}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}
          />
        ))}
    </div>
  )
}

export default Feed