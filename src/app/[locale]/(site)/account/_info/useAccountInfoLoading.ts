'use client'

import { useOnLoadAttendance } from '@/client/store/student/attendance/hook'
import { useOnLoadStudentAvatar } from '@/client/store/student/avatar/hook'
import { useOnLoadStudentHistory } from '@/client/store/student/history/hook'
import { useOnLoadStudentInfo } from '@/client/store/student/info/hook'
import { useOnLoadStudentReadingUnit } from '@/client/store/student/reading-unit/hook'

export default function useAccountInfoLoading() {
  // const { loading: isDailyLearningLoading, error: dailyLearningError } =
  //   useOnLoadStudentDailyLearning()
  // const { loading: isTodayLearingLoading, error: todayLearingError } =
  //   useOnLoadStudentTodayStudy()
  const { loading: isStudentLoading, error: studentError } =
    useOnLoadStudentInfo()
  const {
    loading: isStudentHistoryListLoading,
    error: studentHistoryListError,
  } = useOnLoadStudentHistory()
  // const { loading: isTodoLoading, error: todoError } = useOnLoadLibraryTodo()
  // const { loading: isEventLoading, error: eventError } =
  //   useOnLoadReadingkingEvent()
  // const { loading: isFavoriteLoading, error: favoriteError } =
  //   useOnLoadLibraryFavorite()
  const { loading: isAvatarLoading, error: avatarError } =
    useOnLoadStudentAvatar()
  // const { loading: isLevelPointLoading, error: levelPointError } =
  //   useOnLoadAchieveLevelPoint()
  // const { loading: isLevelBookLoading, error: levelBookError } =
  //   useOnLoadAchieveLevelBooks()
  // const { loading: isContinuousStudyLoading, error: continuousStudyError } =
  //   useOnLoadStudentContinuousStudy()
  const { loading: isAttendLoading, error: attendError } = useOnLoadAttendance()
  const { loading: isEarnReadingUnitLoading, error: earnReadingUnitError } =
    useOnLoadStudentReadingUnit()

  const isLoading =
    isStudentLoading ||
    isStudentHistoryListLoading ||
    // isTodayLearingLoading ||
    // isTodoLoading ||
    // isDailyLearningLoading ||
    // isEventLoading ||
    // isFavoriteLoading ||
    isAvatarLoading ||
    // isLevelPointLoading ||
    // isLevelBookLoading ||
    // isContinuousStudyLoading ||
    isAttendLoading ||
    isEarnReadingUnitLoading

  const isError =
    // dailyLearningError ||
    // todayLearingError ||
    studentError ||
    studentHistoryListError ||
    // todoError ||
    // eventError ||
    // favoriteError ||
    avatarError ||
    // levelPointError ||
    // levelBookError ||
    // continuousStudyError ||
    attendError ||
    earnReadingUnitError

  return {
    isLoading,
    isError,
  }
}
