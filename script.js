// 맛집 데이터 - 직접 HTML에 포함
const restaurantData = {
    "hapjeong": {
        "cheap": [
            {
                "name": "돈돼지유 생삼겹살 김치찌개",
                "category": "한식",
                "address": "서울특별시 마포구 양화로 72 효성해링턴타워 1층 133~134호",
                "recommendMenu": "김치찌개,제육볶음",
                "comment": "합정역 근처 가성비 좋은 점심맛집",
                "price": "10,000원~"
            },
            {
                "name": "각시보쌈",
                "category": "한식",
                "address": "서울특별시 마포구 성지길 25 보광빌딩",
                "recommendMenu": "보쌈정식",
                "comment": "점심특선이 최고, 알찬 한끼 먹을수 있는 곳",
                "price": "9,500원~"
            },
            {
                "name": "한석화비빔밥",
                "category": "한식",
                "address": "서울 마포구 독막로15길 5 B-1 102호",
                "recommendMenu": "돌솥비빔밥",
                "comment": "돌솥비빔밥 1티어/청와대 셰프 출신 주방장",
                "price": "8,500원~15,000원"
            },
            {
                "name": "합정조이떡볶이",
                "category": "분식",
                "address": "서울 마포구 양화로 36 102호",
                "recommendMenu": "떡볶이,순대,튀김 조합",
                "comment": "합정동 떡볶이 최고 맛집, 우리 팀 대식가 두명이 항상 패배하고 나오는 집",
                "price": "10,000원~"
            },
            {
                "name": "다북어국",
                "category": "한식",
                "address": "서울 마포구 양화로6길 9-6 서교동 복합주택",
                "recommendMenu": "북어구이",
                "comment": "꿀팁! 구이 시키면 북어국도 나와요. (금요일엔 계란말이가 나와요😁)",
                "price": "9,000원~"
            },
            {
                "name": "합정순대국",
                "category": "한식",
                "address": "서울 마포구 양화로6길 14",
                "recommendMenu": "순대국밥",
                "comment": "킹대갓밥, 특은 진짜 많이 나옴",
                "price": "11,000원~"
            },
            // 여기까지 작업함
            {
                "name": "금성회관",
                "category": "한식",
                "address": "서울특별시 마포구 양화로6길 78 1층",
                "recommendMenu": "육회비빔밥",
                "comment": "육회 품질이 좋아서 소스안뿌려먹어도 맛있는집",
                "price": "12,000원~"
            },

            {
                "name": "맥도날드 합정메세나폴리스",
                "category": "패스트푸드",
                "address": "서울 마포구 양화로 45",
                "recommendMenu": "빅맥세트",
                "comment": "빠르게 한 끼 해결하기 좋은 곳",
                "price": "5,000원~"
            },
            {
                "name": "보승회관 합정점",
                "category": "한식",
                "address": "서울 마포구 독막로 7길 51",
                "recommendMenu": "제육볶음",
                "comment": "맛있는 밑반찬에 푸짐한 양의 한식당",
                "price": "7,000원~"
            }
        ],
        "mid": [
            {
                "name": "금문중화요리",
                "category": "중식",
                "address": "서울 마포구 월드컵로3길 14",
                "recommendMenu": "짜장면",
                "comment": "합정 맛집으로 유명한 중국집",
                "price": "12,000원~"
            },
            {
                "name": "문현연탄곱창",
                "category": "한식",
                "address": "서울 마포구 독막로7길 53",
                "recommendMenu": "곱창구이",
                "comment": "쫄깃한 식감의 연탄 곱창이 일품",
                "price": "15,000원~"
            },
            {
                "name": "이리에 라멘",
                "category": "일식",
                "address": "서울 마포구 양화로 64",
                "recommendMenu": "돈코츠라멘",
                "comment": "진한 돈코츠 국물이 일품인 라멘 맛집",
                "price": "11,000원~"
            },
            {
                "name": "평이담백 뼈칼국수 본점",
                "category": "한식",
                "address": "서울 마포구 양화로8길 38",
                "recommendMenu": "뼈칼국수",
                "comment": "시원한 육수가 일품인 칼국수 맛집",
                "price": "12,000원~"
            },
            {
                "name": "월남선생 합정역점",
                "category": "베트남음식",
                "address": "서울 마포구 양화로 45",
                "recommendMenu": "쌀국수",
                "comment": "깔끔한 맛의 쌀국수를 즐길 수 있는 곳",
                "price": "11,000원~"
            },
            {
                "name": "물고기초밥",
                "category": "일식",
                "address": "서울 마포구 독막로4길 3",
                "recommendMenu": "모듬초밥",
                "comment": "신선한 회를 맛볼 수 있는 초밥집",
                "price": "15,000원~"
            },
            {
                "name": "의정부부대찌개",
                "category": "한식",
                "address": "서울 마포구 토정로1길 28",
                "recommendMenu": "부대찌개",
                "comment": "칼칼한 국물이 맛있는 부대찌개 전문점",
                "price": "12,000원~"
            },
            {
                "name": "코코이찌방야 합정역메세나폴리스점",
                "category": "일식",
                "address": "서울 마포구 양화로 45",
                "recommendMenu": "돈카츠카레",
                "comment": "바삭한 돈카츠와 매콤한 카레의 조합",
                "price": "10,000원~"
            },
            {
                "name": "생선구이전문점",
                "category": "한식",
                "address": "서울 마포구 양화로 72",
                "recommendMenu": "고등어구이",
                "comment": "신선한 생선으로 구워낸 구이 요리",
                "price": "15,000원~"
            },
            {
                "name": "버거4.5",
                "category": "햄버거",
                "address": "서울 마포구 와우산로 146",
                "recommendMenu": "트러플버거",
                "comment": "수제버거의 진수를 맛볼 수 있는 곳",
                "price": "12,000원~"
            }
        ],
        "expensive": [
            {
                "name": "명륜진사갈비 서울 합정점",
                "category": "한식",
                "address": "서울 마포구 양화로 48",
                "recommendMenu": "직화갈비",
                "comment": "불맛 가득한 갈비를 무제한으로 즐길 수 있는 곳",
                "price": "20,000원~"
            },
            {
                "name": "피자네버슬립스 합정상수점",
                "category": "피자",
                "address": "서울 마포구 독막로9길 33",
                "recommendMenu": "페퍼로니 피자",
                "comment": "뉴욕 스타일의 정통 피자를 맛볼 수 있는 곳",
                "price": "25,000원~"
            },
            {
                "name": "바이미 합정",
                "category": "이탈리안",
                "address": "서울 마포구 양화로6길 57-6",
                "recommendMenu": "트러플 파스타",
                "comment": "분위기 좋은 이탈리안 레스토랑",
                "price": "22,000원~"
            },
            {
                "name": "무탄 합정점",
                "category": "일식",
                "address": "서울 마포구 독막로8길 6",
                "recommendMenu": "오마카세",
                "comment": "신선한 해산물로 즐기는 프리미엄 오마카세",
                "price": "28,000원~"
            }
        ]
    }
    // 다른 지역 데이터는 나중에 추가할 수 있음
};

let currentArea = 'hapjeong';
let currentPrice = 'cheap';
let usedMenus = [];
let history = [];

// 네이버 지도 URL 생성 함수
function generateMapUrl(restaurantName) {
    const encodedName = encodeURIComponent(restaurantName);
    return `https://map.naver.com/p/search/${encodedName}`;
}

// 지역 변경 함수
function changeArea() {
    const areaSelector = document.getElementById('areaSelector');
    currentArea = areaSelector.value;

    // 히스토리 초기화
    resetHistory();

    // UI 업데이트
    updateCategoryLabel();
}

// 가격대 버튼 이벤트 설정
function setupPriceButtons() {
    const buttons = document.querySelectorAll('.price-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // 활성화된 버튼 업데이트
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 현재 가격대 업데이트
            currentPrice = button.dataset.price;

            // UI 초기화
            document.getElementById('menu').innerHTML = '랜덤 맛집 추천을 받아보세요!';
            document.getElementById('restaurantInfo').style.display = 'none';

            // 카테고리 라벨 업데이트
            updateCategoryLabel();
        });
    });
}

// 카테고리 라벨 업데이트
function updateCategoryLabel() {
    let priceText = '';
    let areaText = '';

    // 지역 텍스트 설정
    if (currentArea === 'hapjeong') {
        areaText = '합정';
    } else if (currentArea === 'hongdae') {
        areaText = '홍대';
    } else if (currentArea === 'gangnam') {
        areaText = '강남';
    }

    // 가격대 텍스트 설정
    switch (currentPrice) {
        case 'cheap':
            priceText = '저렴하게';
            break;
        case 'mid':
            priceText = '기분좋게';
            break;
        case 'expensive':
            priceText = '플렉스';
            break;
    }

    document.getElementById('categoryLabel').innerText = `${areaText} - ${priceText} 맛집 추천`;
}

// 히스토리 초기화
function resetHistory() {
    usedMenus = [];
    history = [];

    const button = document.getElementById("recommendBtn");
    if (button) {
        button.innerHTML = '<i class="fas fa-dice"></i> 점·메·추!';
        button.style.backgroundColor = "var(--primary-color)";
    }

    document.getElementById("menu").innerHTML = "랜덤 맛집 추천을 받아보세요!";
    document.getElementById("restaurantInfo").style.display = "none";
    document.getElementById("history").innerHTML = "";

    const actionButtons = document.getElementById("actionButtons");
    actionButtons.innerHTML = `<button id="recommendBtn" onclick="recommendMenu()"><i class="fas fa-dice"></i> 점·메·추!</button>`;
}

// 맛집 추천 함수
function recommendMenu() {
    const actionButtons = document.getElementById("actionButtons");
    actionButtons.innerHTML = '';

    // 현재 지역과 가격대에 맞는 식당 목록 가져오기
    const restaurants = restaurantData[currentArea][currentPrice];

    // 아직 추천하지 않은 식당만 필터링
    const unusedRestaurants = restaurants.filter(restaurant =>
        !usedMenus.includes(restaurant.name)
    );

    // 추천할 식당이 없는 경우
    if (unusedRestaurants.length === 0) {
        document.getElementById("menu").innerHTML = `<span>흥, 너가 알아서해! 😤</span>`;
        document.getElementById("restaurantInfo").style.display = "none";
        actionButtons.innerHTML = `<button class="reset-btn" onclick='resetHistory()'><i class="fas fa-redo-alt"></i> 전체 메뉴 리셋</button>`;
        return;
    }

    // 추천 시작 애니메이션
    document.getElementById("menu").innerHTML = `<span class='spinner'>두구두구두구...</span>`;
    document.getElementById("restaurantInfo").style.display = "none";

    // 룰렛 효과 표현
    let count = 0;
    const maxCount = 15;
    const interval = 80;

    const shuffleInterval = setInterval(() => {
        const randomRestaurant = unusedRestaurants[Math.floor(Math.random() * unusedRestaurants.length)];
        document.getElementById("menu").innerHTML = `<div class="spin-animation">오늘은...<br><span>${randomRestaurant.name}</span></div>`;
        count++;

        if (count >= maxCount) {
            clearInterval(shuffleInterval);

            // 최종 선택된 식당
            const finalRestaurant = unusedRestaurants[Math.floor(Math.random() * unusedRestaurants.length)];
            document.getElementById("menu").innerHTML = `🍱 오늘의 추천!<br><span>${finalRestaurant.name}</span>`;

            // 식당 정보 표시
            showRestaurantInfo(finalRestaurant);

            // 히스토리 업데이트
            history.unshift(finalRestaurant.name);
            const latestHistory = history.slice(0, 5).map(item => `<li>${item}</li>`);
            document.getElementById("history").innerHTML = latestHistory.join("");

            // 사용된 메뉴에 추가
            usedMenus.push(finalRestaurant.name);

            // 버튼 업데이트
            actionButtons.innerHTML = `
                        <button onclick='recommendMenu()'><i class="fas fa-dice"></i> 다시 추천받기</button>
                        <button class="reset-btn" onclick='resetHistory()'><i class="fas fa-redo-alt"></i> 리셋</button>
                    `;
        }
    }, interval);
}

// 식당 정보 표시 함수
function showRestaurantInfo(restaurant) {
    const infoElement = document.getElementById('restaurantInfo');
    const mapUrl = generateMapUrl(restaurant.name);

    infoElement.innerHTML = `
                <div class="restaurant-detail"><i class="fas fa-utensils"></i> ${restaurant.category}</div>
                <div class="restaurant-detail"><i class="fas fa-map-marker-alt"></i> ${restaurant.address}</div>
                <div class="restaurant-detail"><i class="fas fa-won-sign"></i> ${restaurant.price}</div>
                <div class="restaurant-detail"><i class="fas fa-star"></i> 추천메뉴: ${restaurant.recommendMenu}</div>
                <div class="restaurant-comment">${restaurant.comment}</div>
                <a href="${mapUrl}" class="map-link" target="_blank">
                    <i class="fas fa-location-arrow"></i> 네이버 지도에서 보기
                </a>
            `;
    infoElement.style.display = 'flex';
}

// 페이지 로드 시 실행
window.addEventListener('DOMContentLoaded', () => {
    setupPriceButtons();
    updateCategoryLabel();
});