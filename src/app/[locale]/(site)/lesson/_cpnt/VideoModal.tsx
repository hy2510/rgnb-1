import { BasicButtonBox, VideoModalBox } from '@/app/_ui/StyledCommon'

export default function VideoModal() {
  const videoUrl =
    'https://moviebook.a1edu.com/newsystem/moviebook/eb-ka-001.mp4'

  return (
    <VideoModalBox>
      <div className="video-modal-container">
        <video src={videoUrl} controls></video>
        {/* 닫기 버튼 */}
        <div className="delete-button"></div>
      </div>
      <div className="buttons">
        {/* 영상 시청 완료전 */}
        <BasicButtonBox $color="gray">학습 완료</BasicButtonBox>
        {/* 영상 시청 완료 */}
        {/* <BasicButtonBox $color="red">학습 완료</BasicButtonBox> */}
      </div>
    </VideoModalBox>
  )
}
