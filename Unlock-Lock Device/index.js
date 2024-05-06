// Write your code here
import {useState} from 'react'
import {BgContainer, Image, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [unLock, setUnLock] = useState(false)

  const UnLockDevice = () =>
    setUnLock(
      <>
        <BgContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Paragraph>Your device is Unlocked</Paragraph>
          <Button type="button">Lock</Button>
        </BgContainer>
      </>,
    )

  return (
    <>
      <BgContainer>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
        <Paragraph>Your device is Locked</Paragraph>
        <Button type="button" onClick={UnLockDevice}>
          Unlock
        </Button>
      </BgContainer>
    </>
  )
}

export default Unlock
