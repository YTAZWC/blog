KEEP.initModeToggle=()=>{KEEP.utils.modeToggle={themeModeToggleBtn:document.querySelector(".tool-toggle-theme-mode"),iconDom:document.querySelector(".tool-toggle-theme-mode i"),enableLightMode(){document.documentElement.classList.remove("dark-mode"),document.documentElement.classList.add("light-mode"),this.iconDom.className="fas fa-moon",KEEP.themeInfo.styleStatus.isDark=!1,KEEP.setStyleStatus()},enableDarkMode(){document.documentElement.classList.add("dark-mode"),document.documentElement.classList.remove("light-mode"),this.iconDom.className="fas fa-sun",KEEP.themeInfo.styleStatus.isDark=!0,KEEP.setStyleStatus()},isDarkPrefersColorScheme(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)")},initModeStatus(){var e=KEEP.getStyleStatus();e?e.isDark?this.enableDarkMode():this.enableLightMode():this.isDarkPrefersColorScheme().matches?this.enableDarkMode():this.enableLightMode()},initModeToggleButton(){this.themeModeToggleBtn.addEventListener("click",()=>{document.documentElement.classList.contains("dark-mode")?this.enableLightMode():this.enableDarkMode()})},initModeAutoTrigger(){this.isDarkPrefersColorScheme().addEventListener("change",e=>{e.matches?this.enableDarkMode():this.enableLightMode()})}},KEEP.utils.modeToggle.initModeStatus(),KEEP.utils.modeToggle.initModeToggleButton(),KEEP.utils.modeToggle.initModeAutoTrigger()};