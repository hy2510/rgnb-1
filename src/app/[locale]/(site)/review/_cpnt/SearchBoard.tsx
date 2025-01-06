import { SearchBoardBox } from '@/app/_ui/StyledReview'

export default function SearchBoard() {
  return (
    <SearchBoardBox>
      <div className="container">
        <div className="row-1">
          <div className="menu-item active">최근 7일</div>
          <div className="menu-item">최근 15일</div>
          <div className="menu-item">최근 30일</div>
        </div>
        <div className="row-2">
          <div className="col-left">
            <div className="search-date ">
              <input type="date" />
              <div>~</div>
              <input type="date" />
            </div>
            <div className="search-title">
              <input type="text" placeholder="도서명" />
            </div>
          </div>
          <div className="col-right">
            <div className="search-button"></div>
          </div>
        </div>
      </div>
    </SearchBoardBox>
  )
}
