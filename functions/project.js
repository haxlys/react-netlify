exports.handler = function(event, context, callback) {
  const project = [
    {
      company: '소리바다',
      date: '2017.3 - 현재',
      project: [
        {
          title: '라디오 스테이션',
          desc: '',
          date: '',
          company: '',
        },
        {
          title: '별 포인트',
          desc: '',
          date: '',
          company: '',
        },
      ]
    },
    {
      company: '디나인텍',
      date: '2014.6 - 2016.12',
      project: [
        {
          title: '북한종합DB',
          desc: '2015년에 진행된 유지보수 사업의 연장선으로 유지보수 및 일부 고도화 작업. 스프링 기반의 전자정부프레임워크와 Sybase, JSP 사용. ',
          date: '2016.2 - 2016.12',
          company: '통일부',
        },
        {
          title: 'DTIMS ERP 고도화 본사업 구축',
          desc: '2014년에 시작했던 사업의 본격적인 프로젝트. 전자정부프레임워크와 웹스퀘어5.0을 사용하여 개발',
          date: '2015.10 - 2016.1',
          company: '국방기술품질원',
        },
        {
          title: '북한종합DB',
          desc: '통일부 정세분석총괄과에서 담당하는 ERP 시스템으로 전반적인 북한정세를 파악할 수 있도록 제작된 시스템 을 유지보수. ',
          date: '2014.12 - 2015.2',
          company: '통일부',
        },
        {
          title: 'DTIMS ERP 고도화 시범사업 구축',
          desc: '국방기술품질원에서 기존에 사용하는 ERP 시스템을 고도화하는 프로젝트. 10 년 장기 프로젝트에서 첫발을 내딛는 프로젝트.기존 ERP시스템에서 일부분만 시범적으로 고도화 작업을 해서 장기 프로젝트의 청사진을 제공해줄 목적으로 개발.스프링 기반의 전자정부프레임워크와 프론트엔드 개발은 Xplatform으로 제작. ',
          date: '2014.12 - 2015.2',
          company: '국방기술품질원',
        },
        {
          title: '국토교통진흥원 ERP 개선사업',
          desc: '국토교통진흥원에서 사용하고 있는 ERP 시스템을 부분적으로 개선하는 사업. 구축된 환경은 스프링과 스트럿츠2 프레임워크를 혼합한 형태로 프론트개발은 Trust Platform을 사용하여 개발. ',
          date: '2014.9 - 2014.11',
          company: '국토교통진흥원',
        },
        {
          title: '헌법 세계 총회',
          desc: '헌법 세계 총회 2014를 기념하는 이벤트성 웹사이트로 전자정부프레임워크를 사용하여 제작, 메이븐 및 넥서 스 활용. ',
          date: '2014.6 - 2014.8',
          company: '헌법재판소',
        },
      ]
    }
  ];
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(project),
  });
};