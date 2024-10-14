const fs = require('fs');
const git = require('isomorphic-git');
const path = require('path');
const { promisify } = require('util');
const mkdir = promisify(fs.mkdir);

// Git 저장소 초기화
async function initRepo() {
  const dir = path.resolve('./my-git-repo'); // 저장소를 생성할 디렉토리 경로

  try {
    await mkdir(dir, { recursive: true });
    await git.init({ fs, dir });
    console.log('Git 저장소가 초기화되었습니다.');

    // 사용자 정보 설정
    await git.setConfig({
      fs,
      dir,
      path: 'user.name',
      value: 'Your Name',
    });
    await git.setConfig({
      fs,
      dir,
      path: 'user.email',
      value: 'your.email@example.com',
    });
    console.log('Git 사용자 정보가 설정되었습니다.');
  } catch (err) {
    console.error('Git 저장소 초기화 및 설정에 실패했습니다:', err);
  }
}

// 파일 추가 및 커밋
async function commitChanges(message) {
  const dir = path.resolve('./my-git-repo');

  try {
    await git.add({ fs, dir, filepath: '.' });
    console.log('변경 사항이 스테이징되었습니다.');

    await git.commit({
      fs,
      dir,
      author: {
        name: 'Your Name',
        email: 'your.email@example.com',
      },
      message,
    });
    console.log(`커밋 완료: ${message}`);

    // Git 로그 출력
    const log = await git.log({ fs, dir });
    console.log('커밋 로그:');
    log.forEach(commit => {
      console.log(`commit ${commit.oid}`);
      console.log(`Author: ${commit.commit.author.name} <${commit.commit.author.email}>`);
      console.log(`Date: ${new Date(commit.commit.author.timestamp * 1000).toLocaleString()}`);
      console.log(`\n    ${commit.commit.message}\n`);
    });
  } catch (err) {
    console.error('커밋에 실패했습니다:', err);
  }
}

// 예시 실행
(async () => {
  try {
    await initRepo();
    await commitChanges('초기 커밋 메시지');
  } catch (err) {
    console.error('전체 작업 중 오류 발생:', err);
  }
})();
