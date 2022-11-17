import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
