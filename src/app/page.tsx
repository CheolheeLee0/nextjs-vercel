'use client'
import Head from 'next/head';
import { useState } from 'react';

// 설명 상태를 위한 인터페이스 정의
interface ExplanationState {
  twoColumn?: boolean;
  threeColumn?: boolean;
  sidebar?: boolean;
  cardGrid?: boolean;
  headerFooter?: boolean;
}

export default function Home() {
  const [showExplanations, setShowExplanations] = useState<ExplanationState>({});

  const toggleExplanation = (sectionId: keyof ExplanationState) => {
    setShowExplanations(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Next.js & Tailwind CSS Layout Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow flex">
        <div className="w-1/2 overflow-y-auto p-4 border-r">
          <h1 className="text-3xl font-bold mb-6">Layout Examples</h1>
          
          <div className="space-y-8">
            {/* 각 섹션을 여기에 배치 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Basic Two-Column Layout</h2>
              <p className="mb-4">이 레이아웃은 기본적인 2열 구조를 보여줍니다. 모바일에서는 세로로, 데스크톱에서는 가로로 배치됩니다.</p>
              <button
                onClick={() => toggleExplanation('twoColumn')}
                className="mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                {showExplanations.twoColumn ? '설명 숨기기' : 'CSS 클래스 설명 보기'}
              </button>
              {showExplanations.twoColumn && (
                <div className="mb-4 p-4 bg-gray-100 rounded">
                  <ul className="list-disc pl-5">
                    <li><code>flex flex-col md:flex-row</code>: 모바일에서는 세로로, 중간 크기 이상에서는 가로로 배치</li>
                    <li><code>gap-4</code>: 요소 사이에 1rem(16px) 간격 추가</li>
                    <li><code>flex-1</code>: 각 열이 동일한 너비를 가지도록 설정</li>
                    <li><code>bg-blue-100</code>, <code>bg-green-100</code>: 배경색 지정</li>
                    <li><code>p-4</code>: 모든 방향에 1rem 패딩 추가</li>
                    <li><code>rounded</code>: 모서리를 둥글게 처리</li>
                  </ul>
                </div>
              )}
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`<div className="flex flex-col md:flex-row gap-4">
  <div className="flex-1 bg-blue-100 p-4 rounded">Column 1</div>
  <div className="flex-1 bg-green-100 p-4 rounded">Column 2</div>
</div>`}</code>
              </pre>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Responsive Three-Column Grid</h2>
              <p className="mb-4">이 그리드는 화면 크기에 따라 1열, 2열, 3열로 변화하는 반응형 레이아웃입니다.</p>
              <button
                onClick={() => toggleExplanation('threeColumn')}
                className="mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                {showExplanations.threeColumn ? '설명 숨기기' : 'CSS 클래스 설명 보기'}
              </button>
              {showExplanations.threeColumn && (
                <div className="mb-4 p-4 bg-gray-100 rounded">
                  <ul className="list-disc pl-5">
                    <li><code>grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3</code>: 반응형 그리드 설정</li>
                    <li><code>gap-4</code>: 요소 사이에 1rem(16px) 간격 추가</li>
                    <li><code>bg-red-100</code>, <code>bg-yellow-100</code>, <code>bg-purple-100</code>: 배경색 지정</li>
                    <li><code>p-4</code>: 모든 방향에 1rem 패딩 추가</li>
                    <li><code>rounded</code>: 모서리를 둥글게 처리</li>
                  </ul>
                </div>
              )}
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-red-100 p-4 rounded">Column 1</div>
  <div className="bg-yellow-100 p-4 rounded">Column 2</div>
  <div className="bg-purple-100 p-4 rounded">Column 3</div>
</div>`}</code>
              </pre>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Sidebar with Main Content</h2>
              <p className="mb-4">이 레이아웃은 사이드바와 메인 콘텐츠 영역을 가진 일반적인 웹 페이지 구조를 보여줍니다.</p>
              <button
                onClick={() => toggleExplanation('sidebar')}
                className="mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                {showExplanations.sidebar ? '설명 숨기기' : 'CSS 클래스 설명 보기'}
              </button>
              {showExplanations.sidebar && (
                <div className="mb-4 p-4 bg-gray-100 rounded">
                  <ul className="list-disc pl-5">
                    <li><code>flex flex-col md:flex-row</code>: 모바일에서는 세로로, 중간 크기 이상에서는 가로로 배치</li>
                    <li><code>gap-4</code>: 요소 사이에 1rem(16px) 간격 추가</li>
                    <li><code>md:w-1/4</code>: 사이드바의 너비 설정</li>
                    <li><code>bg-gray-200</code>: 사이드바의 배경색 설정</li>
                    <li><code>md:w-3/4</code>: 메인 콘텐츠 영역의 너비 설정</li>
                    <li><code>bg-gray-100</code>: 메인 콘텐츠 영역의 배경색 설정</li>
                    <li><code>p-4</code>: 모든 방향에 1rem 패딩 추가</li>
                    <li><code>rounded</code>: 모서리를 둥글게 처리</li>
                  </ul>
                </div>
              )}
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`<div className="flex flex-col md:flex-row gap-4">
  <div className="md:w-1/4 bg-gray-200 p-4 rounded">Sidebar</div>
  <div className="md:w-3/4 bg-gray-100 p-4 rounded">Main Content</div>
</div>`}</code>
              </pre>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Card Grid Layout</h2>
              <p className="mb-4">이 레이아웃은 반응형 카드 그리드를 구현합니다. 화면 크기에 따라 열 수가 변경됩니다.</p>
              <button
                onClick={() => toggleExplanation('cardGrid')}
                className="mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                {showExplanations.cardGrid ? '설명 숨기기' : 'CSS 클래스 설명 보기'}
              </button>
              {showExplanations.cardGrid && (
                <div className="mb-4 p-4 bg-gray-100 rounded">
                  <ul className="list-disc pl-5">
                    <li><code>grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4</code>: 반응형 그리드 설정</li>
                    <li><code>gap-4</code>: 요소 사이에 1rem(16px) 간격 추가</li>
                    <li><code>bg-white</code>: 카드의 배경색 설정</li>
                    <li><code>shadow</code>: 카드의 그림자 설정</li>
                    <li><code>rounded</code>: 카드의 모서리 둥글게 처리</li>
                    <li><code>p-4</code>: 카드의 패딩 설정</li>
                  </ul>
                </div>
              )}
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <div key={item} className="bg-white shadow rounded p-4">Card {item}</div>
  ))}
</div>`}</code>
              </pre>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Header, Main, Footer Layout</h2>
              <p className="mb-4">이 레이아웃은 전형적인 웹 페이지 구조 더, 메인 콘텐츠, 푸터를 구현합니다.</p>
              <button
                onClick={() => toggleExplanation('headerFooter')}
                className="mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                {showExplanations.headerFooter ? '설명 숨기기' : 'CSS 클래스 설명 보기'}
              </button>
              {showExplanations.headerFooter && (
                <div className="mb-4 p-4 bg-gray-100 rounded">
                  <ul className="list-disc pl-5">
                    <li><code>flex flex-col min-h-screen</code>: 전형적인 웹 페이지 구조</li>
                    <li><code>bg-blue-500</code>: 헤더의 배경색 설정</li>
                    <li><code>text-white</code>: 헤더의 텍스트 색상 설정</li>
                    <li><code>p-4</code>: 헤더의 패딩 설정</li>
                    <li><code>bg-gray-100</code>: 메인 콘텐츠 영역의 배경색 설정</li>
                    <li><code>p-4</code>: 메인 콘텐츠 영역의 패딩 설정</li>
                    <li><code>bg-gray-800</code>: 푸터의 배경색 설정</li>
                    <li><code>text-white</code>: 푸터의 텍스트 색상 설정</li>
                    <li><code>p-4</code>: 푸터의 패딩 설정</li>
                  </ul>
                </div>
              )}
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`<div className="flex flex-col min-h-screen">
  <header className="bg-blue-500 text-white p-4">Header</header>
  <main className="flex-grow bg-gray-100 p-4">Main Content</main>
  <footer className="bg-gray-800 text-white p-4">Footer</footer>
</div>`}</code>
              </pre>
            </section>
          </div>
        </div>

        <div className="w-1/2 overflow-y-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Layout Examples</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Basic Two-Column Layout</h2>
              <div className="h-40 flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-blue-100 p-4 rounded">Column 1</div>
                <div className="flex-1 bg-green-100 p-4 rounded">Column 2</div>
              </div>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Responsive Three-Column Grid</h2>
              <div className="h-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-red-100 p-4 rounded">Column 1</div>
                <div className="bg-yellow-100 p-4 rounded">Column 2</div>
                <div className="bg-purple-100 p-4 rounded">Column 3</div>
              </div>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Sidebar with Main Content</h2>
              <div className="h-40 flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4 bg-gray-200 p-4 rounded">Sidebar</div>
                <div className="md:w-3/4 bg-gray-100 p-4 rounded">Main Content</div>
              </div>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Card Grid Layout</h2>
              <div className="h-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="bg-white shadow rounded p-4">Card {item}</div>
                ))}
              </div>
            </section>

            <hr />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Header, Main, Footer Layout</h2>
              <div className="h-40 flex flex-col min-h-[50vh] border">
                <header className="bg-blue-500 text-white p-4">Header</header>
                <main className="flex-grow bg-gray-100 p-4">Main Content</main>
                <footer className="bg-gray-800 text-white p-4">Footer</footer>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}