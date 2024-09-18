import React from 'react';

const ThemeView = ({ theme }) => {
    return (
        <svg width="200" height="126" viewBox="0 0 200 126" fill="none" xmlns="http://www.w3.org/2000/svg" data-theme={theme}>
            <rect width="200" height="126" fill="var(--bg-color)" />
            <rect x="127.75" y="42.7998" width="42.4223" height="42.4223" rx="3.25" fill="var(--bg-color)" stroke="var(--color-title)" strokeWidth="0.5" />
            <path d="M128.949 43.8235L168.996 83.8699C169.017 83.8909 169.017 83.925 168.996 83.946C168.975 83.967 168.941 83.967 168.92 83.946L128.873 43.8995C128.852 43.8785 128.852 43.8445 128.873 43.8235C128.894 43.8025 128.928 43.8025 128.949 43.8235Z" fill="var(--color-title)" stroke="var(--color-title)" strokeWidth="0.5" />
            <path d="M128.857 84.0668L169.158 43.7662C169.179 43.7452 169.213 43.7451 169.234 43.7662C169.255 43.7872 169.255 43.8212 169.234 43.8422L128.933 84.1429C128.912 84.1639 128.878 84.1639 128.857 84.1429C128.836 84.1219 128.836 84.0878 128.857 84.0668Z" fill="var(--color-title)" stroke="var(--color-title)" strokeWidth="0.5" />
            <mask id="path-5-inside-1_325_112" fill="var(--bg-color)">
                <path d="M0 0H37V126H0V0Z" />
            </mask>
            <path d="M0 0H37V126H0V0Z" fill="var(--bg-color)" />
            <path d="M36.5 0V126H37.5V0H36.5Z" fill="var(--secondary-bg-color)" mask="url(#path-5-inside-1_325_112)" />
            <g clipPath="url(#clip0_325_112)">
                <path d="M3.56274 19.2555V13.7991H5.6779C6.30963 13.7991 6.80106 13.9654 7.1522 14.298C7.50333 14.6306 7.6788 15.0237 7.67857 15.4774C7.68107 15.8179 7.57249 16.1509 7.36748 16.4317C7.1572 16.7166 6.8549 16.9212 6.46061 17.0453L7.35847 18.4251H8.02937V19.1909C7.55296 19.3693 7.14696 19.3901 6.81141 19.2536C6.66855 19.1934 6.54015 19.0687 6.42623 18.8795L5.43658 17.184H4.57977V19.2555H3.56274ZM4.57977 14.5937V16.3893H5.67322C5.9763 16.3893 6.20805 16.3003 6.36849 16.1221C6.5275 15.9477 6.61311 15.7246 6.60914 15.495C6.61301 15.2643 6.52923 15.0399 6.37282 14.8621C6.20972 14.684 5.97607 14.595 5.67189 14.595L4.57977 14.5937Z" fill="var(--color-title)" />
                <path d="M19.0264 19.2555V15.3607H19.9863V19.2555H19.0264Z" fill="#7DD79F" />
                <path d="M19.4974 14.7172C19.2345 14.7172 19.0214 14.5132 19.0214 14.2662C19.0214 14.0193 19.2345 13.8153 19.4974 13.8153C19.7602 13.8153 19.9734 14.0193 19.9734 14.2662C19.9734 14.5132 19.7602 14.7172 19.4974 14.7172Z" fill="#7DD79F" />
                <path d="M24.7012 19.2554H23.7413V16.5827C23.7413 16.3331 23.6655 16.1345 23.514 15.9869C23.4435 15.9151 23.3578 15.8582 23.2623 15.8196C23.1668 15.7811 23.0638 15.7619 22.9599 15.7633C22.8572 15.7612 22.7551 15.7799 22.6608 15.8183C22.5665 15.8567 22.4821 15.9138 22.4135 15.9856C22.268 16.1341 22.1952 16.3327 22.1952 16.5814V19.2542H21.2343V16.6156C21.2343 16.0861 21.3964 15.684 21.7206 15.4092C22.0448 15.1345 22.4721 14.9972 23.0026 14.9972C23.5331 14.9972 23.9473 15.1661 24.2453 15.504C24.5377 15.1663 24.9445 14.9974 25.4659 14.9972C25.9873 14.997 26.4111 15.1343 26.7373 15.4092C27.063 15.6846 27.2259 16.0867 27.2259 16.6156V19.2554H26.266V16.5827C26.266 16.3331 26.1931 16.1345 26.0473 15.9869C25.9787 15.915 25.8944 15.8578 25.8001 15.8195C25.7057 15.7811 25.6037 15.7623 25.5009 15.7645C25.3958 15.7633 25.2915 15.7825 25.1945 15.8207C25.0975 15.859 25.0099 15.9155 24.9372 15.9869C24.7796 16.1353 24.701 16.3339 24.7012 16.5827V19.2554Z" fill="#7DD79F" />
                <path d="M13.9038 18.8886C13.6829 18.6711 13.5724 18.3069 13.5724 17.796L13.5824 13.8699L14.4502 13.8219L14.4399 17.5658C14.4399 17.8535 14.479 18.0659 14.5574 18.203C14.6357 18.3402 14.7903 18.4121 15.0213 18.4188C15.113 18.4265 15.205 18.4298 15.297 18.4285V19.2144H14.9492C14.4733 19.2144 14.1248 19.1058 13.9038 18.8886Z" fill="var(--color-title)" />
                <path d="M18.003 18.4285V19.2046C17.825 19.2176 17.7093 19.224 17.6562 19.2237C17.1798 19.2237 16.8312 19.1136 16.6104 18.8932C16.3897 18.6729 16.2792 18.307 16.279 17.7957V15.8602H15.7169V15.074H16.288V13.857L17.1558 13.8187V15.0731H17.9616V15.8602H17.1462V17.5658C17.1462 17.8599 17.1835 18.074 17.2583 18.208C17.3331 18.342 17.486 18.4123 17.7173 18.4188C17.7863 18.425 17.8805 18.4285 18.003 18.4285Z" fill="#7DD79F" />
                <path d="M9.62984 17.8202C9.93625 18.357 10.4933 18.5314 11.0774 18.2905C11.5417 18.1005 11.7644 17.759 11.8451 17.3589L12.713 17.6477C12.5654 18.1915 12.2376 18.7374 11.4372 19.0651C10.261 19.5468 9.10581 19.0896 8.58578 17.9675C8.09045 16.9013 8.37483 15.7273 9.51135 15.2619C10.776 14.7442 11.7477 15.4814 12.1799 16.415C12.2393 16.5429 12.3114 16.7192 12.3114 16.7192L9.62984 17.8202ZM9.36048 17.1165L11.0334 16.4313C10.8752 16.1111 10.49 15.7947 9.88184 16.0437C9.36983 16.2535 9.26869 16.7336 9.36048 17.1165Z" fill="var(--color-title)" />
                <path d="M24.246 21.0938C23.4013 21.0938 22.6189 20.7673 22.0885 20.191L22.708 19.6892C23.0942 20.1091 23.676 20.3408 24.3081 20.3249C24.8966 20.3098 25.4313 20.0781 25.7384 19.7052L26.3859 20.1756C25.9306 20.7281 25.1629 21.0712 24.3302 21.0925C24.3021 21.0931 24.2741 21.0938 24.246 21.0938Z" fill="#7DD79F" />
                <path d="M3.92764 20.314L3.81277 20.2962C3.72177 20.281 3.65149 20.251 3.60194 20.2061C3.55328 20.1612 3.52896 20.1033 3.52896 20.0321C3.52896 19.956 3.56139 19.8946 3.62626 19.848C3.69023 19.8015 3.76907 19.7782 3.86277 19.7782C4.00062 19.7782 4.1173 19.8256 4.2128 19.9204L4.10063 20.0321C4.03126 19.9543 3.94972 19.9153 3.85601 19.9153C3.80376 19.9153 3.76321 19.9263 3.73438 19.9484C3.70555 19.9695 3.69113 19.9962 3.69113 20.0283C3.69113 20.0935 3.74339 20.1337 3.8479 20.149L3.94251 20.1642C4.04342 20.1794 4.1191 20.2108 4.16955 20.2581C4.22001 20.3047 4.24524 20.3648 4.24524 20.4385C4.24524 20.5146 4.2128 20.5768 4.14793 20.6251C4.08216 20.6725 3.99386 20.6962 3.88304 20.6962C3.72807 20.6962 3.60239 20.6395 3.50598 20.5261L3.61545 20.422C3.65239 20.4677 3.69339 20.5019 3.73843 20.5248C3.78348 20.5477 3.83844 20.5591 3.90331 20.5591C3.96008 20.5591 4.00423 20.5485 4.03576 20.5273C4.06729 20.5053 4.08306 20.4766 4.08306 20.441C4.08306 20.3724 4.03126 20.3301 3.92764 20.314ZM4.7397 20.0448C4.83431 20.0448 4.91495 20.0762 4.98162 20.1388C5.04829 20.2014 5.08163 20.2789 5.08163 20.3712C5.08163 20.4634 5.04829 20.5409 4.98162 20.6035C4.91584 20.6653 4.83521 20.6962 4.7397 20.6962C4.6433 20.6962 4.56221 20.6653 4.49644 20.6035C4.43067 20.5417 4.39778 20.4643 4.39778 20.3712C4.39778 20.2781 4.43067 20.2006 4.49644 20.1388C4.56311 20.0762 4.6442 20.0448 4.7397 20.0448ZM4.60591 20.5108C4.64105 20.5472 4.68564 20.5654 4.7397 20.5654C4.79376 20.5654 4.83746 20.5472 4.8708 20.5108C4.90593 20.4744 4.9235 20.4279 4.9235 20.3712C4.9235 20.3144 4.90593 20.2679 4.8708 20.2315C4.83746 20.1951 4.79376 20.1769 4.7397 20.1769C4.68564 20.1769 4.64105 20.1951 4.60591 20.2315C4.57167 20.2679 4.55455 20.3144 4.55455 20.3712C4.55455 20.4279 4.57167 20.4744 4.60591 20.5108ZM5.21908 20.0601H5.37314V20.4321C5.37314 20.4736 5.38396 20.5066 5.40558 20.5312C5.4272 20.5548 5.45783 20.5667 5.49748 20.5667C5.53982 20.5667 5.57316 20.5527 5.59749 20.5248C5.62271 20.496 5.63533 20.4579 5.63533 20.4105V20.0601H5.7894V20.6822H5.63803V20.6314C5.59568 20.6746 5.53847 20.6962 5.46639 20.6962C5.39071 20.6962 5.33035 20.6721 5.2853 20.6238C5.24115 20.5747 5.21908 20.5074 5.21908 20.422V20.0601ZM6.38886 20.0525V20.1896C6.38436 20.1887 6.37624 20.1883 6.36453 20.1883C6.28976 20.1883 6.23705 20.2078 6.20642 20.2467C6.17578 20.2857 6.16047 20.3496 6.16047 20.4385V20.6822H6.0064V20.0601H6.15776V20.1274C6.20281 20.0766 6.26994 20.0512 6.35912 20.0512C6.37174 20.0512 6.38165 20.0516 6.38886 20.0525ZM6.65899 20.6822H6.50495V20.0601H6.65899V20.6822ZM6.58332 19.9623C6.55628 19.9623 6.53332 19.9534 6.5144 19.9357C6.49547 19.9179 6.48602 19.8963 6.48602 19.8709C6.48602 19.8455 6.49547 19.8243 6.5144 19.8074C6.53332 19.7896 6.55628 19.7807 6.58332 19.7807C6.61036 19.7807 6.63332 19.7896 6.65225 19.8074C6.67117 19.8243 6.68062 19.8455 6.68062 19.8709C6.68062 19.8963 6.67117 19.9179 6.65225 19.9357C6.63332 19.9534 6.61036 19.9623 6.58332 19.9623ZM7.42785 20.3635L7.42651 20.4143H6.97377C6.97738 20.4609 6.99494 20.4977 7.02648 20.5248C7.05802 20.5519 7.09854 20.5654 7.14811 20.5654C7.21927 20.5654 7.27604 20.5362 7.3184 20.4778L7.42244 20.5692C7.35218 20.6539 7.26072 20.6962 7.14811 20.6962C7.04811 20.6962 6.9679 20.6666 6.90755 20.6073C6.84627 20.5472 6.81563 20.4698 6.81563 20.375C6.81563 20.2827 6.84357 20.2044 6.89944 20.1401C6.95618 20.0766 7.03142 20.0448 7.12514 20.0448C7.22514 20.0448 7.30038 20.0762 7.35081 20.1388C7.40218 20.2014 7.42785 20.2764 7.42785 20.3635ZM7.12648 20.1769C7.08773 20.1769 7.05575 20.1883 7.03052 20.2112C7.00622 20.234 6.99 20.2632 6.98189 20.2988H7.26433C7.26343 20.2641 7.25128 20.2353 7.22785 20.2125C7.20442 20.1887 7.17064 20.1769 7.12648 20.1769ZM7.56733 20.1896V20.0601H8.07144V20.1832L7.74844 20.5515H8.08766V20.6822H7.56059V20.5591L7.88088 20.1896H7.56733ZM8.4916 20.5375L8.33349 20.8575H8.18482L8.32267 20.5375H8.4916ZM9.36984 20.0601H9.53606L9.30091 20.6822H9.13332L8.89817 20.0601H9.06439L9.21713 20.4956L9.36984 20.0601ZM9.91593 20.0448C10.0105 20.0448 10.0912 20.0762 10.1579 20.1388C10.2245 20.2014 10.2579 20.2789 10.2579 20.3712C10.2579 20.4634 10.2245 20.5409 10.1579 20.6035C10.0921 20.6653 10.0114 20.6962 9.91593 20.6962C9.81953 20.6962 9.73843 20.6653 9.67267 20.6035C9.60688 20.5417 9.57401 20.4643 9.57401 20.3712C9.57401 20.2781 9.60688 20.2006 9.67267 20.1388C9.73933 20.0762 9.82044 20.0448 9.91593 20.0448ZM9.78215 20.5108C9.81727 20.5472 9.86189 20.5654 9.91593 20.5654C9.97 20.5654 10.0137 20.5472 10.047 20.5108C10.0822 20.4744 10.0997 20.4279 10.0997 20.3712C10.0997 20.3144 10.0822 20.2679 10.047 20.2315C10.0137 20.1951 9.97 20.1769 9.91593 20.1769C9.86189 20.1769 9.81727 20.1951 9.78215 20.2315C9.74791 20.2679 9.73078 20.3144 9.73078 20.3712C9.73078 20.4279 9.74791 20.4744 9.78215 20.5108ZM10.3953 20.0601H10.5494V20.4321C10.5494 20.4736 10.5602 20.5066 10.5818 20.5312C10.6034 20.5548 10.6341 20.5667 10.6737 20.5667C10.7161 20.5667 10.7494 20.5527 10.7737 20.5248C10.7989 20.496 10.8116 20.4579 10.8116 20.4105V20.0601H10.9656V20.6822H10.8143V20.6314C10.7719 20.6746 10.7147 20.6962 10.6426 20.6962C10.5669 20.6962 10.5066 20.6721 10.4615 20.6238C10.4174 20.5747 10.3953 20.5074 10.3953 20.422V20.0601ZM11.4222 20.4473L11.3344 20.427C11.2001 20.3974 11.133 20.3318 11.133 20.2302C11.133 20.1744 11.1555 20.1295 11.2005 20.0956C11.2456 20.0618 11.3037 20.0448 11.3749 20.0448C11.4704 20.0448 11.5537 20.0796 11.6249 20.149L11.5262 20.248C11.4857 20.1955 11.4339 20.1693 11.3708 20.1693C11.3438 20.1693 11.3217 20.1752 11.3046 20.1871C11.2884 20.1981 11.2803 20.2116 11.2803 20.2277C11.2803 20.2565 11.3019 20.2759 11.3452 20.2861L11.4492 20.3089C11.5844 20.3377 11.6519 20.4025 11.6519 20.5032C11.6519 20.5608 11.6285 20.6073 11.5817 20.6429C11.5357 20.6784 11.4717 20.6962 11.3898 20.6962C11.2744 20.6962 11.183 20.656 11.1154 20.5756L11.2127 20.4816C11.2614 20.5417 11.3244 20.5718 11.4019 20.5718C11.4695 20.5718 11.5033 20.5506 11.5033 20.5083C11.5033 20.4812 11.4762 20.4609 11.4222 20.4473ZM12.2718 20.4143C12.2754 20.4609 12.293 20.4977 12.3245 20.5248C12.356 20.5519 12.3966 20.5654 12.4461 20.5654C12.5173 20.5654 12.5741 20.5362 12.6164 20.4778L12.7205 20.5692C12.6502 20.6539 12.5588 20.6962 12.4461 20.6962C12.3461 20.6962 12.2659 20.6666 12.2056 20.6073C12.1443 20.5472 12.1137 20.4698 12.1137 20.375C12.1137 20.2827 12.1416 20.2044 12.1975 20.1401C12.2542 20.0766 12.3294 20.0448 12.4232 20.0448C12.5232 20.0448 12.5984 20.0762 12.6488 20.1388C12.7002 20.2014 12.7259 20.2764 12.7259 20.3635C12.7259 20.3847 12.7254 20.4016 12.7245 20.4143H12.2718ZM12.4245 20.1769C12.3858 20.1769 12.3538 20.1883 12.3285 20.2112C12.3042 20.234 12.288 20.2632 12.2799 20.2988H12.5624C12.5615 20.2641 12.5493 20.2353 12.5259 20.2125C12.5024 20.1887 12.4687 20.1769 12.4245 20.1769ZM12.211 19.9585L12.3421 19.7922H12.5164L12.6475 19.9585H12.4961L12.4286 19.8823L12.361 19.9585H12.211ZM13.1137 20.6835C13.0281 20.6835 12.9686 20.667 12.9353 20.634C12.9019 20.601 12.8853 20.5439 12.8853 20.4626V20.1896H12.788V20.0601H12.8853V19.8861H13.038V20.0601H13.1961V20.1896H13.038V20.441C13.038 20.4859 13.0452 20.5159 13.0596 20.5312C13.074 20.5464 13.1028 20.554 13.1461 20.554L13.1961 20.5515V20.681C13.1691 20.6827 13.1416 20.6835 13.1137 20.6835ZM13.9081 20.3635L13.9067 20.4143H13.4539C13.4576 20.4609 13.4751 20.4977 13.5067 20.5248C13.5382 20.5519 13.5787 20.5654 13.6283 20.5654C13.6995 20.5654 13.7562 20.5362 13.7986 20.4778L13.9026 20.5692C13.8324 20.6539 13.7409 20.6962 13.6283 20.6962C13.5283 20.6962 13.4481 20.6666 13.3877 20.6073C13.3265 20.5472 13.2958 20.4698 13.2958 20.375C13.2958 20.2827 13.3238 20.2044 13.3796 20.1401C13.4364 20.0766 13.5116 20.0448 13.6053 20.0448C13.7053 20.0448 13.7805 20.0762 13.831 20.1388C13.8824 20.2014 13.9081 20.2764 13.9081 20.3635ZM13.6067 20.1769C13.5679 20.1769 13.536 20.1883 13.5107 20.2112C13.4864 20.234 13.4702 20.2632 13.4621 20.2988H13.7445C13.7436 20.2641 13.7315 20.2353 13.708 20.2125C13.6846 20.1887 13.6508 20.1769 13.6067 20.1769ZM14.3323 20.4473L14.2445 20.427C14.1103 20.3974 14.0431 20.3318 14.0431 20.2302C14.0431 20.1744 14.0656 20.1295 14.1107 20.0956C14.1557 20.0618 14.2139 20.0448 14.285 20.0448C14.3805 20.0448 14.4639 20.0796 14.5351 20.149L14.4364 20.248C14.3958 20.1955 14.344 20.1693 14.281 20.1693C14.2539 20.1693 14.2319 20.1752 14.2148 20.1871C14.1985 20.1981 14.1904 20.2116 14.1904 20.2277C14.1904 20.2565 14.2121 20.2759 14.2553 20.2861L14.3594 20.3089C14.4945 20.3377 14.5621 20.4025 14.5621 20.5032C14.5621 20.5608 14.5387 20.6073 14.4918 20.6429C14.4459 20.6784 14.3819 20.6962 14.2999 20.6962C14.1846 20.6962 14.0931 20.656 14.0255 20.5756L14.1228 20.4816C14.1715 20.5417 14.2346 20.5718 14.3121 20.5718C14.3796 20.5718 14.4134 20.5506 14.4134 20.5083C14.4134 20.4812 14.3864 20.4609 14.3323 20.4473ZM15.3603 20.1769C15.3081 20.1769 15.2648 20.1951 15.2306 20.2315C15.1973 20.2679 15.1806 20.3144 15.1806 20.3712C15.1806 20.4279 15.1977 20.4744 15.2319 20.5108C15.2662 20.5472 15.3094 20.5654 15.3617 20.5654C15.3986 20.5654 15.4297 20.5582 15.4549 20.5439C15.4802 20.5286 15.5058 20.5036 15.532 20.4689L15.6374 20.5616C15.5716 20.6514 15.4779 20.6962 15.3563 20.6962C15.2644 20.6962 15.186 20.6653 15.1211 20.6035C15.0562 20.5409 15.0238 20.4634 15.0238 20.3712C15.0238 20.2789 15.0562 20.2014 15.1211 20.1388C15.186 20.0762 15.2644 20.0448 15.3563 20.0448C15.4662 20.0448 15.5558 20.0863 15.6252 20.1693L15.5185 20.2658C15.4716 20.2065 15.4189 20.1769 15.3603 20.1769ZM16.3259 20.3635L16.3245 20.4143H15.8718C15.8754 20.4609 15.893 20.4977 15.9245 20.5248C15.956 20.5519 15.9966 20.5654 16.0462 20.5654C16.1173 20.5654 16.1741 20.5362 16.2164 20.4778L16.3205 20.5692C16.2502 20.6539 16.1588 20.6962 16.0462 20.6962C15.9461 20.6962 15.866 20.6666 15.8056 20.6073C15.7443 20.5472 15.7137 20.4698 15.7137 20.375C15.7137 20.2827 15.7416 20.2044 15.7975 20.1401C15.8542 20.0766 15.9295 20.0448 16.0232 20.0448C16.1232 20.0448 16.1984 20.0762 16.2489 20.1388C16.3002 20.2014 16.3259 20.2764 16.3259 20.3635ZM16.0245 20.1769C15.9858 20.1769 15.9538 20.1883 15.9286 20.2112C15.9042 20.234 15.888 20.2632 15.8799 20.2988H16.1624C16.1615 20.2641 16.1493 20.2353 16.1259 20.2125C16.1025 20.1887 16.0687 20.1769 16.0245 20.1769ZM16.8786 20.0525V20.1896C16.8741 20.1887 16.866 20.1883 16.8542 20.1883C16.7795 20.1883 16.7268 20.2078 16.6961 20.2467C16.6655 20.2857 16.6502 20.3496 16.6502 20.4385V20.6822H16.4961V20.0601H16.6475V20.1274C16.6925 20.0766 16.7597 20.0512 16.8488 20.0512C16.8615 20.0512 16.8714 20.0516 16.8786 20.0525ZM17.2644 20.6835C17.1788 20.6835 17.1193 20.667 17.086 20.634C17.0527 20.601 17.036 20.5439 17.036 20.4626V20.1896H16.9387V20.0601H17.036V19.8861H17.1887V20.0601H17.3468V20.1896H17.1887V20.441C17.1887 20.4859 17.1959 20.5159 17.2104 20.5312C17.2248 20.5464 17.2536 20.554 17.2968 20.554L17.3468 20.5515V20.681C17.3198 20.6827 17.2923 20.6835 17.2644 20.6835ZM17.641 20.6822H17.4869V20.0601H17.641V20.6822ZM17.5653 19.9623C17.5383 19.9623 17.5153 19.9534 17.4964 19.9357C17.4775 19.9179 17.468 19.8963 17.468 19.8709C17.468 19.8455 17.4775 19.8243 17.4964 19.8074C17.5153 19.7896 17.5383 19.7807 17.5653 19.7807C17.5924 19.7807 17.6153 19.7896 17.6343 19.8074C17.6532 19.8243 17.6626 19.8455 17.6626 19.8709C17.6626 19.8963 17.6532 19.9179 17.6343 19.9357C17.6153 19.9534 17.5924 19.9623 17.5653 19.9623ZM18.1314 19.7922L18.1909 19.7934V19.9267C18.1819 19.9259 18.1702 19.9255 18.1558 19.9255C18.1071 19.9255 18.0715 19.9357 18.049 19.956C18.0274 19.9754 18.0166 20.0076 18.0166 20.0525V20.0601H18.176V20.1896H18.0166V20.6822H17.8652V20.1896H17.7679V20.0601H17.8652V20.0283C17.8652 19.8709 17.954 19.7922 18.1314 19.7922ZM18.4619 20.6822H18.3079V20.0601H18.4619V20.6822ZM18.3862 19.9623C18.3592 19.9623 18.3362 19.9534 18.3173 19.9357C18.2984 19.9179 18.2889 19.8963 18.2889 19.8709C18.2889 19.8455 18.2984 19.8243 18.3173 19.8074C18.3362 19.7896 18.3592 19.7807 18.3862 19.7807C18.4133 19.7807 18.4362 19.7896 18.4551 19.8074C18.4741 19.8243 18.4836 19.8455 18.4836 19.8709C18.4836 19.8963 18.4741 19.9179 18.4551 19.9357C18.4362 19.9534 18.4133 19.9623 18.3862 19.9623ZM18.7929 20.4143C18.7965 20.4609 18.8141 20.4977 18.8456 20.5248C18.8771 20.5519 18.9177 20.5654 18.9672 20.5654C19.0384 20.5654 19.0952 20.5362 19.1375 20.4778L19.2416 20.5692C19.1713 20.6539 19.0798 20.6962 18.9672 20.6962C18.8672 20.6962 18.787 20.6666 18.7267 20.6073C18.6654 20.5472 18.6348 20.4698 18.6348 20.375C18.6348 20.2827 18.6627 20.2044 18.7186 20.1401C18.7753 20.0766 18.8506 20.0448 18.9443 20.0448C19.0443 20.0448 19.1195 20.0762 19.17 20.1388C19.2213 20.2014 19.247 20.2764 19.247 20.3635C19.247 20.3847 19.2465 20.4016 19.2456 20.4143H18.7929ZM18.9456 20.1769C18.9069 20.1769 18.8749 20.1883 18.8497 20.2112C18.8253 20.234 18.8091 20.2632 18.801 20.2988H19.0835C19.0826 20.2641 19.0704 20.2353 19.047 20.2125C19.0235 20.1887 18.9898 20.1769 18.9456 20.1769ZM18.8321 19.9585L18.9551 19.7922H19.1443L18.9835 19.9585H18.8321ZM19.9466 20.4143H19.7871V19.7922H19.9466V20.4143ZM19.7709 20.6061C19.7709 20.5807 19.7804 20.5591 19.7993 20.5413C19.8182 20.5235 19.8412 20.5146 19.8682 20.5146C19.8952 20.5146 19.9182 20.5235 19.9371 20.5413C19.956 20.5591 19.9655 20.5807 19.9655 20.6061C19.9655 20.6306 19.956 20.6518 19.9371 20.6695C19.9182 20.6873 19.8952 20.6962 19.8682 20.6962C19.8412 20.6962 19.8182 20.6873 19.7993 20.6695C19.7804 20.6518 19.7709 20.6306 19.7709 20.6061Z" fill="var(--color-title)" />
            </g>
            <rect x="49.918" y="67.8842" width="36.4405" height="8.7413" rx="2" fill="var(--main-color)" />
            <rect x="48.25" y="66.6772" width="35.9405" height="8.2413" rx="1.75" fill="var(--bg-color)" stroke="var(--color-title)" strokeWidth="0.5" />
            <rect x="49" y="15" width="10" height="10" rx="2" fill="var(--main-color)" />
            <rect x="48.25" y="14.25" width="9.5" height="9.5" rx="1.75" fill="var(--bg-color)" stroke="var(--color-title)" strokeWidth="0.5" />
            <path d="M49.4384 56.6H110.812C111.33 56.6 111.75 57.0201 111.75 57.5384C111.75 58.0567 111.33 58.4769 110.812 58.4769H49.4384C48.9202 58.4769 48.5 58.0567 48.5 57.5384C48.5 57.0201 48.9202 56.6 49.4384 56.6Z" fill="var(--color-title)" stroke="var(--color-title)" />
            <path d="M50.5818 49.5H88.6636C89.8134 49.5 90.7455 50.4321 90.7455 51.5818C90.7455 52.7316 89.8134 53.6636 88.6636 53.6636H50.5818C49.4321 53.6636 48.5 52.7316 48.5 51.5818C48.5 50.4321 49.4321 49.5 50.5818 49.5Z" fill="var(--color-title)" stroke="var(--color-title)" />
            <path d="M93.1818 51.5818C93.1818 50.1559 94.3377 49 95.7636 49H116.418C117.844 49 119 50.1559 119 51.5818V51.5818C119 53.0077 117.844 54.1636 116.418 54.1636H95.7636C94.3377 54.1636 93.1818 53.0077 93.1818 51.5818V51.5818Z" fill="var(--main-color)" />
            <path d="M49.4384 61.0075H106.976C107.494 61.0075 107.915 61.4277 107.915 61.946C107.915 62.4643 107.494 62.8844 106.976 62.8844H49.4384C48.9202 62.8844 48.5 62.4643 48.5 61.946C48.5 61.4277 48.9202 61.0075 49.4384 61.0075Z" fill="var(--color-title)" stroke="var(--color-title)" />
            <path d="M4.5 28.5H25.5C26.0523 28.5 26.5 28.9477 26.5 29.5C26.5 30.0523 26.0523 30.5 25.5 30.5H4.5C3.94772 30.5 3.5 30.0523 3.5 29.5C3.5 28.9477 3.94772 28.5 4.5 28.5Z" fill="var(--color-title)" stroke="var(--color-title)" />
            <path d="M3 29.5C3 28.6716 3.67157 28 4.5 28H25.5C26.3284 28 27 28.6716 27 29.5V29.5C27 30.3284 26.3284 31 25.5 31H4.5C3.67157 31 3 30.3284 3 29.5V29.5Z" fill="var(--nav-bg-active)" />
            <path d="M3 35.5C3 34.6716 3.67157 34 4.5 34H20.5C21.3284 34 22 34.6716 22 35.5V35.5C22 36.3284 21.3284 37 20.5 37H4.5C3.67157 37 3 36.3284 3 35.5V35.5Z" fill="var(--nav-bg-active)" />
            <path d="M3 41.5C3 40.6716 3.67157 40 4.5 40H25.5C26.3284 40 27 40.6716 27 41.5V41.5C27 42.3284 26.3284 43 25.5 43H4.5C3.67157 43 3 42.3284 3 41.5V41.5Z" fill="var(--nav-bg-active)" />
            <path d="M3 47.5C3 46.6716 3.67157 46 4.5 46H20.5C21.3284 46 22 46.6716 22 47.5V47.5C22 48.3284 21.3284 49 20.5 49H4.5C3.67157 49 3 48.3284 3 47.5V47.5Z" fill="var(--nav-bg-active)" />
            <path d="M3 57.5C3 56.6716 3.67157 56 4.5 56H20.5C21.3284 56 22 56.6716 22 57.5V57.5C22 58.3284 21.3284 59 20.5 59H4.5C3.67157 59 3 58.3284 3 57.5V57.5Z" fill="#D93F21" />
            <path d="M151 17.5C151 16.6716 151.672 16 152.5 16H168.5C169.328 16 170 16.6716 170 17.5V17.5C170 18.3284 169.328 19 168.5 19H152.5C151.672 19 151 18.3284 151 17.5V17.5Z" fill="var(--colored-text)" />
            <defs>
                <clipPath id="clip0_325_112">
                    <rect width="25" height="9" fill="var(--bg-color)" transform="translate(3 13)" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default ThemeView;