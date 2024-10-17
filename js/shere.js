    const url = 'https://mangomlovetype.netlify.app/';
    
    function setShere(){
        var resultImg = document.querySelector('#resultImg');
        var resultAlt = resultImg.firstElementChild.alt;
        const shareTitle = '망그러진곰 연애유형 결과';
        const shareDes = infoList[resultAlt].name;
        const shareImage = url + 'img/image-' + resultAlt + '.png';
        const shareURL = url + 'page/result-' + resultAlt + '.html';

        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
              title: shareTitle,
              description: shareDes,
              imageUrl: shareImage,
              link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL
              },
            },
        
            buttons: [
              {
                title: '결과확인하기',
                link: {
                  mobileWebUrl: shareURL,
                  webUrl: shareURL,
                },
              },
            ]
          });
        }


  function clip(){
    var url = '';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("링크가 복사되었습니다. 필요하신 곳에 붙여넣기 하세요!")
  };
    
    
    