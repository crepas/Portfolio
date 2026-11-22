import React, { useState, useEffect } from 'react';
import profilePhoto from './assets/증명사진.jpg';
import resumePDF from './assets/202144031김승우이력서.pdf';
import { images } from './assets/index';
import './CircularPortfolio.css';

const CircularPortfolio = () => {
  const [offset, setOffset] = useState(0);
  const [targetOffset, setTargetOffset] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [stars] = useState(() => 
    [...Array(100)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`
    }))
  );
  
  const items = [
    { 
      id: 1, 
      title: 'About Me',
      subtitle: '자기소개',
      icon: '👤',
      description: 'Introduction',
      type: 'about'
    },
    { 
      id: 2, 
      title: 'Project 01',
      subtitle: 'B+코치',
      icon: '✏️',
      description: 'Study Coach Platform',
      type: 'project',
      projectId: 'project1'
    },
    { 
      id: 3, 
      title: 'Project 02',
      subtitle: '나루나루',
      icon: '🍴',
      description: 'Food Recommendation App',
      type: 'project',
      projectId: 'project2'
    },
    { 
      id: 4, 
      title: 'Project 03',
      subtitle: '러닝 커뮤니티 플랫폼',
      icon: '🏃‍➡️',
      description: 'Web Platform',
      type: 'project',
      projectId: 'project3'
    },
    { 
      id: 5, 
      title: 'Resume',
      subtitle: '이력서',
      icon: '📄',
      description: 'View & Download',
      type: 'resume'
    }
  ];

  const projectsData = {
    project1: {
      title: 'B+코치',
      period: '2025.07 - 2025.09',
      team: '5명 (PM 1, Frontend 2, Backend 2)',
      description: '효율적인 학습을 위한 AI기반 맞춤형 코칭 플랫폼 "B+코치"입니다. 사용자의 학습 패턴을 분석하여 개인화된 학습 계획과 피드백을 제공합니다. Spring Boot를 활용한 안정적인 백엔드 시스템과 Swift 기반의 ios 어플리케이션을 구현하였습니다.',
      role: [
        'Spring Boot 기반 백엔드 아키텍처 설계 및 전체 API 개발',
        'OpenAI Whisper API 연동으로 오디오 파일 STT 변환 구현',
      ],
      tech: ['Spring Boot', 'MySQL', 'Google Cloud Platform', 'OpenAI Whisper API', 'JWT', 'Swagger', 'Docker'],
      features: [
        '음성 메모 업로드 및 실시간 STT 변환',
        'AI 챗봇 튜터링 시스템',
        '키워드 자동 추출 및 맞춤형 문제 생성'
      ],
      images: [
        images.B플코치1,
        images.B플코치2
      ],
      github: 'https://github.com/unemployed-inhatchackathon/StudycoAchl-Back'
    },
    project2: {
      title: '나루나루 (NaruNaru)',
      period: '2025.03 - 2025.06',
      team: '3명 (Frontend 1, Backend 1, Fullstack 1)',
      description: '현재 위치 기반 주변 2-5km 반경 내 음식점을 찾고, 리뷰하고, 공유할 수 있는 맛집 추천 서비스입니다. 카카오맵 API와 연동하여 실시간 위치 기반 정보를 제공하고, 사용자 선호도 기반 맞춤형 추천을 제공합니다.',
      role: [
        'Flutter 기반 모바일 앱 프론트엔드 개발 담당',
        '회원가입/로그인, 소셜 로그인 시스템 구현 및 사용자 인증 처리',
        '메인 화면 탭 네비게이션 및 카테고리별 음식점 리스트 구현',
        '위치 기반 검색 및 다중 정렬 기능 (거리순, 좋아요순, 리뷰순)',
      ],
      tech: ['Flutter', 'Dart', 'Node.js', 'MongoDB', 'Kakao Map API'],
      features: [
        '카카오맵 API 연동 음식점 정보 제공',
        '위치 기반 2-5km 반경 음식점 검색',
        '다중 정렬 및 카테고리 필터링 (한식/중식/일식/양식/카페)',
        '인스타그램 스타일 리뷰 시스템',
        '실시간 좋아요 및 댓글 동기화',
        '사용자 선호도 기반 맞춤 추천'
      ],
      images: [
        images.narunaru,
        images.narunaru2
      ],
      github: 'https://github.com/crepas/Start_up'
    },
    project3: {
      title: '러닝 커뮤니티 플랫폼',
      period: '2024.09 - 2024.12',
      team: '1명 (개인 프로젝트)',
      description: '20~30대 러닝 인구 증가 트렌드에 맞춰 개발한 러닝 커뮤니티 웹 플랫폼입니다. 카카오맵 API를 활용하여 러닝 경로를 설정하고 공유하며, 같이 달릴 사람을 모집할 수 있는 소셜 기능을 제공합니다. 단순 정보 공유를 넘어 러너들의 실질적인 모임 형성을 지원하는 것이 핵심입니다.',
      role: [
        '프로젝트 기획부터 배포까지 전체 개발 진행 (1인 개발)',
        'Spring Boot 기반 MVC 패턴 아키텍처 설계 및 구현',
        'MySQL 데이터베이스 설계 및 ERD 작성',
        '카카오맵 API 연동 러닝 경로 설정 및 지도 표시 기능 구현',
        '게시판 시스템 (정보 공유, TIB 공유, 모임 모집)',
        '사용자 인증 및 회원 관리 시스템',
        'Bootstrap 기반 반응형 UI/UX 디자인',
        'JavaScript를 활용한 동적 상호작용 구현'
      ],
      tech: ['Spring Boot', 'MySQL', 'JavaScript', 'Bootstrap', 'Kakao Map API'],
      features: [
        '카카오맵 API 기반 러닝 경로 설정 및 공유',
        '러닝 모임 모집 게시판',
        'TIB(Today I Biked) 공유 커뮤니티',
        '정보 공유 게시판 (트레이닝 팁, 장비 리뷰)',
        '반응형 웹 디자인',
        '모던한 UI/UX (기존 러닝 사이트 대비 개선)',
        '모임 참가 신청 및 관리 시스템'
      ],
      images: [
        images.러닝2,
        images.러닝
      ],
      github: 'https://github.com/crepas/sw_project'
    }
  };

  const totalItems = items.length;
  const cardWidth = 350;

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setOffset(prev => {
        const diff = targetOffset - prev;
        if (Math.abs(diff) < 0.5) return targetOffset;
        return prev + diff * 0.2;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetOffset]);


  useEffect(() => {
    const handleWheel = (e) => {
      if (selectedCard) return;
      
      e.preventDefault();
      setTargetOffset(prev => prev + e.deltaY * 0.5);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [selectedCard]);

  const getCardStyle = (index) => {
    const basePosition = index * cardWidth;
    let position = basePosition - offset;
    
    const totalWidth = totalItems * cardWidth;
    position = ((position % totalWidth) + totalWidth) % totalWidth;
    
    if (position > totalWidth / 2) {
      position -= totalWidth;
    }
    
    const distanceFromCenter = Math.abs(position);
    const maxDistance = cardWidth * 2.0;
    let proximity = Math.max(0, 1 - (distanceFromCenter / maxDistance));
    proximity = proximity * proximity;

    const popUp = -40 * proximity;
    const scale = 0.88 + (proximity * 0.12);
    const opacity = proximity > 0.05 ? 0.5 + (proximity * 0.5) : 0;
    const blur = (1 - proximity) * 2.5;

    return {
      transform: `translateX(${position}px) translateY(${popUp}px) scale(${scale})`,
      opacity: opacity,
      filter: `blur(${blur}px)`,
      zIndex: Math.round(proximity * 100),
      pointerEvents: opacity > 0 ? 'auto' : 'none'
    };
  };

  const handleCardClick = (item, idx) => {
    const index = idx % totalItems;
  
    const baseTargetOffset = index * cardWidth;
    const currentOffset = offset;
    
    const totalWidth = totalItems * cardWidth;
    let shortestPath = baseTargetOffset - currentOffset;
    
    if (Math.abs(shortestPath) > totalWidth / 2) {
      if (shortestPath > 0) {
        shortestPath -= totalWidth;
      } else {
        shortestPath += totalWidth;
      }
    }
    
    const finalTargetOffset = currentOffset + shortestPath;
    setTargetOffset(finalTargetOffset);
    
    setTimeout(() => {
      setSelectedCard(item);
    }, 500);
  };

  const renderProjectContent = (projectData) => {
    return (
      <div className="modal-scroll project-content">
        <div className="project-header">
          <h2 className="project-main-title">{projectData.title}</h2>
          <div className="project-meta">
            <span className="project-meta-item">📅 {projectData.period}</span>
            <span className="project-meta-item">👥 {projectData.team}</span>
          </div>
        </div>

        <div className="project-images">
          {projectData.images.map((img, idx) => (
            <div 
              key={idx} 
              className="project-image-wrapper"
              onClick={() => setSelectedImage(img)} 
              style={{ cursor: 'pointer' }}
            >
              <img src={img} alt={`프로젝트 스크린샷 ${idx + 1}`} className="project-image" />
            </div>
          ))}
        </div>

        <div className="project-section">
          <h3 className="project-section-title">📝 프로젝트 소개</h3>
          <p className="project-description">{projectData.description}</p>
        </div>

        <div className="project-section">
          <h3 className="project-section-title">⚡ 주요 기능</h3>
          <ul className="project-list">
            {projectData.features.map((feature, idx) => (
              <li key={idx} className="project-list-item">{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-section">
          <h3 className="project-section-title">👤 담당 역할</h3>
          <ul className="project-list">
            {projectData.role.map((r, idx) => (
              <li key={idx} className="project-list-item">{r}</li>
            ))}
          </ul>
        </div>

        <div className="project-section">
          <h3 className="project-section-title">🛠️ 기술 스택</h3>
          <div className="project-tech-tags">
            {projectData.tech.map((tech, idx) => (
              <span key={idx} className="project-tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {projectData.github && (
          <div className="project-section">
            <a href={projectData.github} target="_blank" rel="noopener noreferrer" className="project-github-link">
              <span>💻</span>
              <span>GitHub 저장소 바로가기</span>
            </a>
          </div>
        )}
      </div>
    );
  };

  const renderResumeContent = () => {
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = '202144031김승우이력서.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    const handleOpenNewWindow = () => {
      window.open(resumePDF, '_blank');
    };

    return (
      <div className="resume-content">
        <div className="resume-header">
          <h2 className="resume-title">📄 이력서</h2>
          <div className="resume-actions">
            <button className="resume-button download" onClick={handleDownload}>
              <span>⬇️</span>
              <span>다운로드</span>
            </button>
            <button className="resume-button newwindow" onClick={handleOpenNewWindow}>
              <span>🔗</span>
              <span>새 창에서 열기</span>
            </button>
          </div>
        </div>
        <div className="resume-viewer">
          <iframe
            src={`${resumePDF}#zoom=FitH`}
            className="resume-iframe"
            title="이력서"
          />
        </div>
      </div>
    );
  };

  const renderAboutMeContent = () => {
    const copyToClipboard = (text, type) => {
      navigator.clipboard.writeText(text).then(() => {
        alert(`${type}이(가) 클립보드에 복사되었습니다!`);
      }).catch(err => {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다.');
      });
    };

    const techStacks = {
      backend: [
        { name: 'Java', level: 80 },
        { name: 'C#', level: 90 },
        { name: 'Go', level: 50 },
        { name: 'Spring', level: 80 },
        { name: 'Spring Boot', level: 70 },
        { name: 'Spring Data JPA', level: 70 },
        { name: 'JSP', level: 70 }
      ],
      frontend: [
        { name: 'JavaScript', level: 70 },
        { name: 'React', level: 70 }
      ],
      database: [
        { name: 'MySQL', level: 70 },
        { name: 'MongoDB', level: 50 },
        { name: 'Oracle SQL', level: 70 }
      ],
      embedded: [
        { name: 'C', level: 80 },
        { name: 'Arduino', level: 70 }
      ],
      dataScience: [
        { name: 'Python', level: 70 },
        { name: 'Scikit-learn', level: 50 },
        { name: 'BeautifulSoup', level: 50 },
        { name: 'Pandas', level: 70 }
      ]
    };

    const getLevelColor = (level) => {
      if (level >= 90) return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'; // A+
      if (level >= 80) return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'; // A
      if (level >= 70) return 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'; // B
      if (level >= 50) return 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'; // C
      return 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'; // D
    };

    return (
      <div className="modal-scroll about-me-content">
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img src={profilePhoto} alt="김승우" className="profile-image" />
          </div>
          <h2 className="profile-name">김승우</h2>
          <p className="profile-title">욕심쟁이 개발자</p>
        </div>

        <div className="greeting-section">
          <p className="greeting-text">
            안녕하세요!<br/>
            저는 <strong>욕심쟁이 개발자 김승우</strong>입니다! 👋<br/>
            한 분야에 정착해 BackEnd면 BackEnd, FrontEnd면 FrontEnd <br/>
            이렇게 깊게 파고드는 것도 좋지만, 데이터사이언스, 보안 등 다양한 분야를 <br/>
            공부하며 경험하고싶기에 욕심쟁이 개발자라고 저를 소개하였습니다! <br/><br/>
          </p>
        </div>

        <div className="tech-stack-section">
          <h3 className="section-title">💻 Tech Stack</h3>
          
          {Object.entries(techStacks).map(([category, techs]) => (
            <div key={category} className="tech-category">
              <h4 className="category-title">
                {category === 'backend' ? 'Backend' :
                 category === 'frontend' ? 'Frontend' :
                 category === 'database' ? 'Database' :
                 category === 'embedded' ? 'Embedded' : 'Data Science'}
              </h4>
              <div className="tech-tags">
                {techs.map((tech, idx) => (
                  <div key={idx} className="tech-tag-with-level">
                    <div className="tech-header">
                      <span className="tech-name">{tech.name}</span>
                      <span className="tech-percentage">{tech.level}%</span>
                    </div>
                    <div className="tech-progress-bar">
                      <div 
                        className="tech-progress-fill"
                        style={{ 
                          width: `${tech.level}%`,
                          background: getLevelColor(tech.level)
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-section">
          <h3 className="contact-title">
            <span>✉️</span>
            <span>Contact</span>
          </h3>
          <div className="contact-items">
            <div className="contact-item" onClick={() => copyToClipboard('010-5597-5085', '전화번호')} style={{ cursor: 'pointer' }}>
              <span className="contact-icon">📱</span>
              <div className="contact-info">
                <span className="contact-label">Phone</span>
                <span className="contact-value">010-5597-5085</span>
              </div>
            </div>
            <div className="contact-item" onClick={() => copyToClipboard('kimsw021104@gmail.com', '이메일')} style={{ cursor: 'pointer' }}>
              <span className="contact-icon">📧</span>
              <div className="contact-info">
                <span className="contact-label">E-mail</span>
                <span className="contact-value">kimsw021104@gmail.com</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💻</span>
              <div className="contact-info">
                <span className="contact-label">Github</span>
                <a href="https://github.com/crepas" target="_blank" rel="noopener noreferrer" className="contact-value" onClick={(e) => e.stopPropagation()}>
                  github.com/crepas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      {isDarkMode && (
        <div className="background-effect">
          {stars.map((star, i) => (
            <div 
              key={i} 
              className="star"
              style={{
                left: star.left,
                top: star.top,
                animationDelay: star.delay
              }}
            />
          ))}
        </div>
      )}

      <div className="header">
        <h1 className="header-title">MY PORTFOLIO</h1>
        <p className="header-subtitle">Scroll to explore my work</p>
        <button 
          className="dark-mode-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="card-track">
        {[...items, ...items, ...items].map((item, idx) => {
          const style = getCardStyle(idx);
          
          return (
            <div
              key={`${item.id}-${idx}`}
              className="card"
              style={{
                ...style,
                transition: 'opacity 0.05s linear, filter 0.05s linear, transform 0.05s linear'
              }}
              onClick={() => handleCardClick(item, idx)}
            >
              <div className="card-inner">
                <div className="card-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-subtitle">{item.subtitle}</p>
                <div className="card-divider"></div>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="footer">
        <div className="scroll-hint">
          <span className="scroll-icon">⟷</span>
          <span className="scroll-text">Scroll horizontally</span>
        </div>
      </div>

      {selectedCard && (
        <div className="modal" onClick={() => setSelectedCard(null)}>
          <div 
            className="modal-content"
            style={{ 
              maxWidth: selectedCard.type === 'about' ? '800px' : 
                        selectedCard.type === 'resume' ? '900px' : 
                        selectedCard.type === 'project' ? '1000px' : '600px' 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header-bar">
              <div className="modal-traffic-lights">
                <div 
                  className="traffic-light close" 
                  onClick={() => setSelectedCard(null)}
                  title="닫기"
                ></div>
                <div className="traffic-light minimize" title="최소화"></div>
                <div className="traffic-light maximize" title="최대화"></div>
              </div>
            </div>

            <div className="modal-body-wrapper">
              {selectedCard.type === 'about' ? (
                renderAboutMeContent()
              ) : selectedCard.type === 'resume' ? (
                renderResumeContent()
              ) : selectedCard.type === 'project' ? (
                renderProjectContent(projectsData[selectedCard.projectId])
              ) : null}
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div 
          className="image-viewer-modal" 
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="image-viewer-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="image-viewer-close" 
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="확대 이미지" 
              className="image-viewer-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CircularPortfolio;