import { Image, StyleSheet, Platform, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.text}>1234</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingTop: 20, // 일반적으로 상태바 아래에 여유를 둡니다.
    paddingLeft: 16, // 주로 16px로 설정하여 일관된 여백을 유지합니다.
    paddingRight: 16, // 오른쪽도 동일하게 설정하여 좌우 여백을 맞춥니다.
    paddingBottom: 20, // 하단에도 여유를 둡니다.
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // 요소 간 간격을 8px로 설정합니다.
    marginBottom: 16, // 제목 컨테이너 아래에 여백을 둡니다.
  },
  stepContainer: {
    gap: 8, // 요소 간 간격을 8px로 설정합니다.
    marginBottom: 16, // 스텝 컨테이너 아래에 여백을 둡니다.
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  text: {
    fontSize: 16, // 일반적인 본문 텍스트 크기
    lineHeight: 24, // 텍스트의 줄 간격을 폰트 크기의 1.5배로 설정합니다.
  },
});
