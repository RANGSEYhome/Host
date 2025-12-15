(function() {
    
  	// =============================================================================
  	// CORE CONFIGURATION
  	// =============================================================================
  	const bisConfig = {
  		url: window.location.origin,
  		feedPath: "/feeds/posts/default",
  		apiFormat: "json-in-script",
  		noImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='225' fill='url(%23grad)'/%3E%3Cg fill='white' opacity='0.2'%3E%3Ccircle cx='100' cy='90' r='25'/%3E%3Crect x='160' y='60' width='120' height='12' rx='6'/%3E%3Crect x='160' y='80' width='80' height='10' rx='5'/%3E%3Crect x='160' y='98' width='100' height='10' rx='5'/%3E%3C/g%3E%3Ctext x='200' y='180' font-family='Noto Serif Khmer, serif' font-size='14' font-weight='bold' fill='white' text-anchor='middle'%3ENo Image%3C/text%3E%3C/svg%3E",
  		// Google Sheets configuration for license verification
  		sheets: {
  			baseUrl: "https://docs.google.com/spreadsheets/d/",
  			gvizQuery: "/gviz/tq?tqx=out:json&tq&gid="
  		},
  		// HARDCODED FREE VERSION SETTINGS SHEET ID
  		freeVersionSheetId: "10GeQw4DbRSyX8aoP2hOJ_WDrmyE92RMGlfEEQ4ChmIE",
  		// License verification master sheet
  		licenseMasterSheetId: "16bRbaT9EEhTZXZPlSIDhhGq2jnIQ_70HsOGEfkH4-T0",
        // 24 hours cache max age
        cacheMaxAge: 24 * 60 * 60 * 1000,
        // Maximum blog feed size allowed by Blogger API
        batchSize: 500,
  	};

  	// =============================================================================
    // DEFAULT SETTINGS
    // =============================================================================
    const defaultSettings = {
        // Feature Setting
        features: {
            blogUrlSelector: "remove",
            sort: "enable",
            labelFilter: "enable",
            labelTextFilter: "admin",
            textSearch: "enable",
            enhancedSearch: "admin",
            urlParameters: "enable",
            layoutSwitcher: "enable",
            savePreferences: "enable",
        },
        // Admin Setting
        admin: {
            sitemapLink: "admin",
            showPostId: "admin",
            sitemapUrl: `${bisConfig.url}/#footer`,
        },
        // Custom Setting
        custom: {
            defaultView: "list",
            defaultSort: "published",
            urlParamLabel: "",
            urlParamSearch: "",
          	urlParamSort: "",
            urlParamView: "",
            searchMode: "auto",
            loadPostMode: "manual",
            dateDisplay: "{day} {monthShort} {year}",
            customUrlConfig: "",
        },
        // Content settings
        content: {
            excerptLength: 180,
            titleMaxLength: 180,
            postsPerPage: 6,
            maxSearchResults: 6,
            imageWidth: 400,
            imageHeight: 225,
            loadMore: "disable",
            bottomBackToTopButton: "remove",
        },
  		// Category organization
  		categoryGroups: {
  			popularTopics: [],
  			organizedGroups: {},
            showUncategorized: "disable",
          	popularLabel: "Popular Topic",
        	uncategorizedLabel: "Other Categories",
  		},
  		// Translations
  		localization: {
  			// Interface
  			searchTitle: "Find Anything, Instantly (Free Demo)",
  			searchSubtitle: "Free Demo: Limited to 6 results per search. <br>See all results? Upgrade to unlock all features and unlimited access.",
  			blogUrlLabel: "Blog URL:",
			blogUrlPlaceholder: "https://example.blogspot.com",
			blogUrlDisablePlaceholder: "Set URL feature disabled",
  			setUrlButton: "Set URL",
  			sortByLabel: "Sort by:",
  			filterByLabel: "Filter by:",
  			searchLabel: "Search:",
			noCategoriesFound: "No categories found",
  			searchPlaceholder: "Enter keywords to search...",
			searchDisablePlaceholder: "Text search feature disabled",
  			searchOperators: "(Operators: +|- AND OR NOT)",
  			sitemapLink: "Sitemap",
  			showingCategory: "Showing posts in category:",
  			showAllPosts: "Show all new",
			posts: "posts.",
  			searchResultFor: "Search result for keyword",
  			inCategory: "in",
  			sortedBy: "sorted by",
            enhancedSearch: "Enhanced search",
          	// Select Option
         	newPublished: "New Published",
  			newUpdated: "New Updated",
  			mostRelevance: "Most Relevance",
  			allCategories: "All Categories",
          	searchCategories: "All categories. Find a specific one...",
  			// State
  			loading: "Loading...",
  			searching: "Searching...",
  			verifyingUrl: "Verifying blog URL...",
  			// Message and Info
  			enterValidUrl: "Enter a valid blog URL to begin",
  			noResults: "No posts found matching your criteria.",
  			invalidBlogUrl: "Invalid blog URL or blog not found",
  			errorCheckingUrl: "Error checking blog URL",
  			errorLoadingPosts: "Error loading posts",
  			errorLoadingLabels: "Error loading labels",
  			errorPerformingSearch: "Error performing search",
  			errorLoadingMore: "Error loading more posts",
  			adjustSearchCriteria: "Try adjusting your search criteria or filters",
			failedInitializeSearch: "Failed to initialize search. Please refresh the page.",
			failedLoadContent: "Failed to load content. Please check your blog URL.",
			errorLoadingCategories: "Error loading categories",
  			// Action and Navigation
  			loadMore: "Load More Posts",
  			backToTop: "Back to Top",
  			bottomBackToTop: "Top",
  			tryAgain: "Try Again",
  			retryButton: "Retry",
  			// Date Localization
  			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  		},
        // Licence
        license: {
            // Contact
            addOnContactLink: "https://rangseyhome.insightune.com",
            addOnNewsLink: "https://rangseyhome.insightune.com",
            addOnLearnMoreMessage: "Learn More",
            addOnLearnMoreTitle: "Learn more about add-on",
            addOnLearnMoreLink: "https://rangseyhome.insightune.com",
            addOnDocMessage: "Doc",
            addOnDocTitle: "View add-on document",
            addOnDocLink: "https://rangseyhome.insightune.com",
            // License Message and Alert
          	licenseMatch: "license active",
            noLicenseMatch: "no license active",
  			licenseRemark: "✓",
            licenseAlert: "🎉",
  			licenseUpgradePrompt: "Upgrade to full",
            // License Setting
            sheetLoadedMessage: "Edit",
            sheetLoadedTitle: "Edit your custom settings",
            noSheetMessage: "Setup",
            noSheetTitle: "Ask license admin to setup your custom settings",
            sheetLoadFailedMessage: "Fix",
            sheetLoadFailedTitle: "Ask license admin to fix custom setting issue",
            liteMessage: "Upgrade",
            liteTitle: "Upgrade to unlock all features",
        },
      	// CSS Customization
        css: {
            // Core brand colors
            primaryColor: "#667eea",
            secondaryColor: "#764ba2", 
            accentColor: "#f093fb",
            successColor: "#48bb78",
            // Background colors
            bgMain: "white",
            bgSecondary: "#f8f9ff",
            // Text colors
            textMain: "#1a1a1a",
            textSecondary: "#2d3748",
            textMuted: "#718096",
        },
  		// Icons
  		icons: {
  			// State
  			loading: "fa-solid fa-spinner fa-spin",
  			search: "fa-solid fa-search",
  			magnifyingGlass: "fa-solid fa-magnifying-glass",
  			reload: "fas fa-redo",
  			// Layout
  			grid: "fas fa-grip",
  			list: "fas fa-list",
  			minimal: "fas fa-bars",
  			// Licence
  			crown: "fas fa-crown",
  			lock: "fas fa-lock",
            // Admin settings
            cog: "fas fa-cog",
            book: "fas fa-book",
            edit: "fas fa-edit",
  			// Other
  			calendar: "fas fa-calendar-alt",
  			externalLink: "fas fa-external-link-alt",
  			filter: "fas fa-filter",
  			newspaper: "fas fa-newspaper",
  			add: "fas fa-plus-circle",
  			arrowUp: "fas fa-arrow-up",
  			arrowRight: "fas fa-arrow-right",
  			link: "fas fa-link",
  			rocket: "fas fa-rocket",
  			sort: "fas fa-sort",
  			sitemap: "fas fa-sitemap",
            star: "fas fa-star",
  		},
  	};

  	// =============================================================================
  	// STATE MANAGEMENT
  	// =============================================================================
    let bisIsAdminChecked = false;
    let bisAdminResult = false;
  	let bisIsSearchMode = false;
    let bisLastSearchQuery = "";
    let bisCurrentLabel = "";
    let bisCurrentView = "list";
    let bisCurrentOrder = "published";
    let bisStartIndex = 1;
    let bisHasMorePosts = true;
    let bisCurrentFeedData = null;
    let bisPostsLoaded = false;
    let bisIsLoadingMore = false;
    let bisScrollHandler = null;
    let bisAllLoadedEntries = [];
    let bisUrlParamsProcessed = false;
    let bisLicenseVerified = false;
    let bisSettingConfig = JSON.parse(JSON.stringify(defaultSettings));
    let bisSheetStatus = 'unknown';
    let globalColValue = null;
    let bisAllLabels = [];
    let bisAllPostsCache = [];
    let bisCacheLoaded = false;
    let bisCacheLoading = false;
    let bisSearchAttempts = 0;
	const MAX_SEARCH_ATTEMPTS = 2;
    
    // =============================================================================
    // Admin Checker - Ultra simple
    // =============================================================================
    async function bisCheckAdminOnce() {
        if (bisIsAdminChecked) return bisAdminResult;

        try {
            // Create test element
            const testDiv = document.createElement('div');
            testDiv.className = 'item-control blog-admin';
            testDiv.style.cssText = 'position: absolute; left: -9999px; width: 1px; height: 1px; visibility: hidden;';
            document.body.appendChild(testDiv);

            // Wait 500ms for mobile (CSS should be cached anyway)
            // await new Promise(resolve => setTimeout(resolve, 500));

            // Check
            const style = window.getComputedStyle(testDiv);
            bisAdminResult = style.display !== 'none';

            document.body.removeChild(testDiv);

        } catch (error) {
            console.error('Error checking admin status:', error);
            bisAdminResult = false;
        } finally {
            bisIsAdminChecked = true;
        }

        return bisAdminResult;
    }

    function bisIsBlogAdmin() {
        return bisAdminResult || false;
    }
    
    // =============================================================================
    // DOM CACHE SYSTEM
    // =============================================================================
    const bisDomCache = {
        elements: new Map(),

        get(id) {
            // Check cache first
            if (this.elements.has(id)) {
                const element = this.elements.get(id);
                // Verify element still exists in DOM
                if (document.body.contains(element)) {
                    return element;
                }
                // Remove from cache if no longer in DOM
                this.elements.delete(id);
            }
            // Get fresh and cache
            const element = document.getElementById(id);
            if (element) {
                this.elements.set(id, element);
            }
            return element;
        },

        query(selector) {
            const cacheKey = `query:${selector}`;
            if (this.elements.has(cacheKey)) {
                const element = this.elements.get(cacheKey);
                if (element && document.body.contains(element)) {
                    return element;
                }
                this.elements.delete(cacheKey);
            }
            const element = document.querySelector(selector);
            if (element) {
                this.elements.set(cacheKey, element);
            }
            return element;
        },

        queryAll(selector) {
            const cacheKey = `queryAll:${selector}`;
            if (this.elements.has(cacheKey)) {
                const elements = this.elements.get(cacheKey);
                // Check if at least one element still exists
                if (elements.length > 0 && document.body.contains(elements[0])) {
                    return elements;
                }
                this.elements.delete(cacheKey);
            }
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                this.elements.set(cacheKey, elements);
            }
            return elements;
        },

        clear() {
            this.elements.clear();
        },
        
        refresh(id) {
            this.elements.delete(id);
            return this.get(id);
        },

        refreshQuery(selector) {
            const cacheKey = `query:${selector}`;
            this.elements.delete(cacheKey);
            return this.query(selector);
        },

        refreshQueryAll(selector) {
            const cacheKey = `queryAll:${selector}`;
            this.elements.delete(cacheKey);
            return this.queryAll(selector);
        }
    };

    // =============================================================================
    // UTILITY FUNCTIONS
    // =============================================================================
	// Parse global text value
    function parseGlobalValue() {
      if (!globalColValue) return {};

      const result = {};
      // Pattern (seperated by |) example: keyName1: valueText1 | keyName2: valueText2
      const pattern = /(\w+):\s*([^|]+)/g;
      let match;

      while ((match = pattern.exec(globalColValue)) !== null) {
        const key = match[1].trim();
        const value = match[2].trim();
        result[key] = value;
      }

      return result;
    }
    
    // Text
    function decodeHtmlEntities(text) {
  		const textArea = document.createElement('textarea');
  		textArea.innerHTML = text;
  		return textArea.value;
  	}
    
    function bisRemoveZeroWidthSpaces(text) {
      if (!text || typeof text !== 'string') return text || '';

      // Comprehensive regex for removing zero-width and control characters
      return text
        .replace(/[\u200B-\u200D\uFEFF]/g, '')  // Zero-width spaces
        .replace(/[\u0000-\u001F\u007F-\u009F\u202A-\u202E]/g, '')  // Control + Bidi chars
        .replace(/\u00A0/g, '')  // Non-breaking space (remove completely for this function)
        .normalize('NFC'); // Normalize Unicode (optional but helpful)
    }

    // Content
  	function bisCropFeed(html, length) {
  		const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  		if (text.length <= length) return text;
  		const truncated = text.substring(0, length);
  		const lastSpace = truncated.lastIndexOf(' ');
  		const finalText = lastSpace > length * 0.7 ? truncated.substring(0, lastSpace) : truncated;
  		return finalText + '&hellip;';
  	}

  	function bisCropTitle(title, length) {
  		return title.length <= length ? title : title.substring(0, length) + '&hellip;';
  	}
    
    function bisFormatDate(date) {
  		const day = date.getDate();
  		const month = date.getMonth();
  		const year = date.getFullYear();
  		const dayOfWeek = date.getDay();

  		const monthName = bisSettingConfig.localization.monthNames[month];
  		const monthShort = bisSettingConfig.localization.monthNamesShort?.[month] || monthName.substring(0, 3);
  		const dayName = bisSettingConfig.localization.dayNames[dayOfWeek];
  		const dayShort = bisSettingConfig.localization.dayNamesShort?.[dayOfWeek] || dayName.substring(0, 3);

  		let display = bisSettingConfig.custom.dateDisplay
  			.replace(/{day}/g, day)
  			.replace(/{month}/g, month + 1)
  			.replace(/{monthName}/g, monthName)
  			.replace(/{monthShort}/g, monthShort)
  			.replace(/{year}/g, year)
  			.replace(/{dayName}/g, dayName)
  			.replace(/{dayShort}/g, dayShort);

  		return {
  			day,
  			month: month + 1,
  			year,
  			monthName,
  			monthShort,
  			dayName,
  			dayShort,
  			display
  		};
  	}
 
    // Clean and Clear
    function bisClearPendingSearch() {
  		if (window.bisPendingCombinedSearch) {
  			delete window.bisPendingCombinedSearch;
  		}
  		bisUrlParamsProcessed = false;
  	}

    function bisCleanSearchQuery(query) {
        if (!query || typeof query !== 'string') return '';

        // First, remove zero-width characters
        let cleaned = bisRemoveZeroWidthSpaces(query);

        // Then handle whitespace normalization for search queries
        cleaned = cleaned
            .replace(/\u00A0/g, ' ')  // Convert nbsp to regular space
            .replace(/[\u2028\u2029\u3000]/g, ' ')  // Convert other special spaces
            .replace(/\s+/g, ' ')  // Normalize multiple spaces
            .trim();

        return cleaned;
    }

    // =============================================================================
    // PERMISSION/ACCESS CONTROL FUNCTIONS
    // =============================================================================
    // General access control
    function bisIsFeatureForAdmin(feature) {
  		return feature === "admin" || feature === "enable" || feature === "hide";
  	}
    
  	function bisIsFeatureVisible(feature) {
      if (!bisIsBlogAdmin()){
        return feature !== "hide" && feature !== "block" && feature !== "remove";
      }
      if (bisIsBlogAdmin()){
        return feature !== "remove";
      }
  	}

  	function bisIsFeatureShownToAll(feature) {
      if (!bisIsBlogAdmin()){
        return feature === "enable";
      }
      if (bisIsBlogAdmin()){
        return bisIsFeatureForAdmin(feature);
      }
  	}
    
    function bisIsFeatureFunctional(feature) {
  		if (bisIsFeatureShownToAll(feature)) {
  			return true;
  		}
  		if (feature === "admin") {
  			return bisIsBlogAdmin();
  		}
  		return false;
  	}
    
	// Set url
    function bisIsblogUrlSelectorFunctional (){
      return bisIsFeatureFunctional(bisSettingConfig.features.blogUrlSelector);
    }
    
	// Sort
    function bisIsSortFunctional() {
      return bisIsFeatureFunctional(bisSettingConfig.features.sort);
  	}
    
	// Label filter
  	function bisIsLabelFilterFunctional() {
  		return bisIsFeatureFunctional(bisSettingConfig.features.labelFilter);
  	}
    
    function bisIsLabelTextFilterFunctional() {
      return bisIsFeatureFunctional(bisSettingConfig.features.labelTextFilter);
  	}

    // Text search
  	function bisIsTextSearchFunctional() {
  		return bisIsFeatureFunctional(bisSettingConfig.features.textSearch);
  	}
    
    function bisIsEnhancedSearchFunctional() {
        return bisIsFeatureFunctional(bisSettingConfig.features.enhancedSearch);
    }
    
	// Layout
  	function bisIsLayoutSwitcherFunctional() {
  		return bisIsFeatureFunctional(bisSettingConfig.features.layoutSwitcher);
  	}

    // Sitemap
  	function bisOpenSitemap() {
  		if (!bisIsFeatureFunctional(bisSettingConfig.admin.sitemapLink)) {
  			const sitemapLink = bisDomCache.query('.bis-search-help a');
  			bisShakeAnimation(sitemapLink);
  			return;
  		}
  		window.open(bisSettingConfig.admin.sitemapUrl, '_blank');
  	}

    // Url params
    function bisIsUrlParamsFunctional() {
      return bisIsFeatureFunctional(bisSettingConfig.features.urlParameters);
  	}
    
    // Bottom back to top
    function bisIsBottomBackToTopFunctional() {
        return bisIsFeatureFunctional(bisSettingConfig.content.bottomBackToTopButton);
    }
    
	// Dissable: Safe wrapper functions for template
    function getDisabledClass(feature) {
        try {
            if (!bisIsAdminChecked) {
                return 'bis-disabled'; // Default to disabled while checking
            }
            return bisIsFeatureFunctional(feature) ? '' : 'bis-disabled';
        } catch (error) {
            return 'bis-disabled'; // Safe fallback
        }
    }

    function getDisabledAttr(feature) {
        try {
            if (!bisIsAdminChecked) {
                return 'disabled'; // Default to disabled while checking
            }
            return bisIsFeatureFunctional(feature) ? '' : 'disabled';
        } catch (error) {
            return 'disabled'; // Safe fallback
        }
    }
    
    // =============================================================================
    // STYLING/CSS FUNCTIONS
    // =============================================================================
    function bisGenerateDynamicCSS(settings) {
        const cssSettings = settings.css || defaultSettings.css;

        return `
        <style>
        /* Dynamic CSS generated from sheet settings */
        :root {
            /* Core Colors */
            --bis-primary: ${cssSettings.primaryColor};
            --bis-secondary: ${cssSettings.secondaryColor};
            --bis-accent: ${cssSettings.accentColor};
            --bis-success: ${cssSettings.successColor};

            /* Background Colors */
            --bis-bg-main: ${cssSettings.bgMain};
            --bis-bg-secondary: ${cssSettings.bgSecondary};
            --bis-bg-gradient: linear-gradient(135deg, ${cssSettings.primaryColor} 0%, ${cssSettings.secondaryColor} 100%);
            --bis-bg-header: linear-gradient(135deg, ${cssSettings.primaryColor} 0%, ${cssSettings.secondaryColor} 100%);

            /* Text Colors */
            --bis-text-main: ${cssSettings.textMain};
            --bis-text-secondary: ${cssSettings.textSecondary};
            --bis-text-muted: ${cssSettings.textMuted};
        }
        </style>
        `;
    }
    
  	// =============================================================================
  	// LICENSE VERIFICATION SYSTEM
  	// =============================================================================
  	// Parse data-label attribute
  	function bisParseLicenseData() {
  		const container = document.querySelector('.bis-container');
  		if (!container) return null;

  		const dataLabel = container.getAttribute('data-label');
  		if (!dataLabel) return {
  			type: 'none'
  		};

  		// Only look for $key= for license key
  		const licenseMatch = dataLabel.match(/\$key=([^$]+)/);

  		return {
  			licenseKey: licenseMatch ? licenseMatch[1] : null
  		};
  	}

  	// Fetch data from Google Sheets
  	async function bisFetchGoogleSheetData(sheetId) {
  		return new Promise((resolve, reject) => {
  			const url = `${bisConfig.sheets.baseUrl}${sheetId}${bisConfig.sheets.gvizQuery}${0}`;

  			fetch(url)
  				.then(response => response.text())
  				.then(data => {
  					try {
  						const jsonData = JSON.parse(data.substring(47).slice(0, -2));
  						resolve(jsonData);
  					} catch (parseError) {
  						console.error('Error parsing GS data:', parseError);
  						reject(parseError);
  					}
  				})
  				.catch(error => {
  					console.error('Error fetching GS data:', error);
  					reject(error);
  				});
  		});
  	}

  	// Convert key-value pairs to settings object
  	function bisConvertKeyValueToSettings(keyValueData) {
  		const settings = JSON.parse(JSON.stringify(defaultSettings));

  		// If no key-value data provided, return default settings but enable basic features
  		if (!keyValueData || keyValueData.length === 0) {
  			settings.features.sort = "show";
  			settings.features.labelFilter = "show";
  			settings.features.textSearch = "show";
  			settings.localization.searchTitle = "Find Anything, Instantly (Free Version)";
  			return settings;
  		}

  		for (let row of keyValueData) {
  			const key = row.c[0]?.v; // First column: Key
  			const value = row.c[1]?.v; // Second column: Value

  			if (!key || value === undefined || value === null) continue;
  			
  			// Handle different key types
          	const validValuesAccessFunctionVisible = ["enable", "disable", "hide", "admin", "block", "remove"];
          	const validValuesAccessFunction = ["enable", "disable", "admin"];
          	const validValuesSearchModes = ["auto", "blogger-first", "enhanced-first", "blogger-only", "enhanced-only"];
          	const validValuesView = ["card", "list", "minimal"];
          	const validValuesSort = ["published", "updated", "relevance"];
          	const validValuesLoadModes = ["auto", "manual"];
  
  			switch (key) {
  				// Feature settings
  				case 'features.blogUrlSelector':
  					settings.features.blogUrlSelector =
                      validValuesAccessFunctionVisible.includes(String(value)) ? String(value) : "remove";
  					break;         
  				case 'features.sort':
  					settings.features.sort =
                      validValuesAccessFunctionVisible.includes(String(value)) ? String(value) : "remove";
  					break;
  				case 'features.labelFilter':
  					settings.features.labelFilter =
                      validValuesAccessFunctionVisible.includes(String(value)) ? String(value) : "remove";
  					break;
                case 'features.labelTextFilter':
                    settings.features.labelTextFilter =
                      validValuesAccessFunction.includes(String(value)) ? String(value) : "disable";
                    break;
  				case 'features.textSearch':
  					settings.features.textSearch =
                      validValuesAccessFunctionVisible.includes(String(value)) ? String(value) : "remove";
  					break;
                case 'features.enhancedSearch':
                    settings.features.enhancedSearch =
                      validValuesAccessFunction.includes(String(value)) ? String(value) : "disable";
                    break;
  				case 'features.urlParameters':
  					settings.features.urlParameters =
                      validValuesAccessFunction.includes(String(value)) ? String(value) : "disable";
  					break;
  				case 'features.layoutSwitcher':
  					settings.features.layoutSwitcher =
                      validValuesAccessFunctionVisible.includes(String(value)) ? String(value) : "remove";
  					break;
                case 'features.savePreferences':
  					settings.features.savePreferences =
                      validValuesAccessFunction.includes(String(value)) ? String(value) : "disable";
  					break;
                
  				// Admin settings
  				case 'admin.sitemapLink':
  					settings.admin.sitemapLink =
                      validValuesAccessFunction.includes(String(value)) ? String(value) : "disable";
  					break;
  				case 'admin.showPostId':
  					settings.admin.showPostId =
                      validValuesAccessFunction.includes(String(value)) ? String(value) : "disable";
  					break;
  				case 'admin.sitemapUrl':
  					settings.admin.sitemapUrl =
                      validValuesAccessFunction.includes(String(value)) ? String(value) : "disable";
  					break;
                
  				// Custom settings
  				case 'custom.defaultView':
  					settings.custom.defaultView =
                      validValuesView.includes(String(value)) ? String(value) : "list";
  					break;
  				case 'custom.defaultSort':
  					settings.custom.defaultSort =
                      validValuesSort.includes(String(value)) ? String(value) : "list";
  					break;
  				case 'custom.urlParamLabel':
  					settings.custom.urlParamLabel = String(value);
  					break;
  				case 'custom.urlParamSearch':
  					settings.custom.urlParamSearch = String(value);
  					break;
  				case 'custom.urlParamView':
  					settings.custom.urlParamView = String(value);
  					break;
  				case 'custom.urlParamSort':
  					settings.custom.urlParamSort = String(value);
  					break;            
                case 'custom.searchMode':
                	settings.custom.searchMode =
                      validValuesSearchModes.includes(String(value)) ? String(value) : "auto";
                    break;
                case 'custom.loadPostMode':
                    settings.custom.loadPostMode = 
                       validValuesLoadModes.includes(String(value)) ? String(value) : "manual";
                    break;   
                case 'custom.dateDisplay':
  					settings.custom.dateDisplay = String(value);
  					break;
                case 'custom.customUrlConfig':
  					settings.custom.customUrlConfig = String(value);
  					break;
                
  				// Content settings
  				case 'content.excerptLength':
  					settings.content.excerptLength = parseInt(value);
  					break;
  				case 'content.titleMaxLength':
  					settings.content.titleMaxLength = parseInt(value);
  					break;
  				case 'content.imageWidth':
  					settings.content.imageWidth = parseInt(value);
  					break;
  				case 'content.imageHeight':
  					settings.content.imageHeight = parseInt(value);
  					break;
  				case 'content.bottomBackToTopButton':
  					settings.content.bottomBackToTopButton = String(value);
  					break;
  				case 'content.loadMore':
  					settings.content.loadMore = String(value);
  					break;
  				case 'content.postsPerPage':
  					settings.content.postsPerPage = parseInt(value);
  					break;
  				case 'content.maxSearchResults':
  					settings.content.maxSearchResults = parseInt(value);
  					break;
                
  				// Category organization
  				case 'categoryGroups.popularTopics':
                    const rawTopics = value.split(',').map(tag => tag.trim());
                    // Format topics to match how labels will be displayed
                    const formattedTopics = rawTopics.map(topic => bisFormatLabelTerm(topic));
                    settings.categoryGroups.popularTopics = formattedTopics;
                    break;
  				case 'categoryGroups.organizedGroups':
  					try {
  						if (value && typeof value === 'string') {
  							const groups = {};
  							const pairs = value.split(',');
  							pairs.forEach(pair => {
  								const [prefix, label] = pair.split(':').map(item => item.trim());
  								if (prefix && label) {
  									groups[prefix] = label;
  								}
  							});
  							settings.categoryGroups.organizedGroups = groups;
  						}
  					} catch (e) {
  						console.error('Error parsing organizedGroups:', e);
  						settings.categoryGroups.organizedGroups = {};
  					}
  					break;
                case 'categoryGroups.showUncategorized':
                    settings.categoryGroups.showUncategorized =
                        validValuesAccessFunction.includes(String(value)) ? String(value) : "disable";
                    break;
                case 'categoryGroups.popularLabel':
                    settings.categoryGroups.popularLabel = String(value);
                    break;
                case 'categoryGroups.uncategorizedLabel':
                    settings.categoryGroups.uncategorizedLabel = String(value);
                    break;
                
  				// Localization settings
                // Interface
  				case 'localization.searchTitle':
  					settings.localization.searchTitle = String(value);
  					break;
  				case 'localization.searchSubtitle':
  					settings.localization.searchSubtitle = String(value);
  					break;
  				case 'localization.blogUrlLabel':
  					settings.localization.blogUrlLabel = String(value);
  					break;
                case 'features.blogUrlDisablePlaceholder':
  					settings.features.blogUrlDisablePlaceholder = String(value);
  					break;
  				case 'localization.setUrlButton':
  					settings.localization.setUrlButton = String(value);
  					break;
  				case 'localization.sortByLabel':
  					settings.localization.sortByLabel = String(value);
  					break;
  				case 'localization.filterByLabel':
  					settings.localization.filterByLabel = String(value);
  					break;
  				case 'localization.searchLabel':
  					settings.localization.searchLabel = String(value);
  					break;
                case 'localization.noCategoriesFound':
  					settings.localization.noCategoriesFound = String(value);
  					break;
  				case 'localization.searchCategories':
  					settings.localization.searchCategories = String(value);
  					break;
  				case 'localization.searchPlaceholder':
  					settings.localization.searchPlaceholder = String(value);
  					break;
                case 'localization.searchDisablePlaceholder':
  					settings.localization.searchDisablePlaceholder = String(value);
  					break;
  				case 'localization.searchOperators':
  					settings.localization.searchOperators = String(value);
  					break;
  				case 'localization.sitemapLink':
  					settings.localization.sitemapLink = String(value);
  					break;
                case 'localization.posts':
  					settings.localization.posts = String(value);
  					break;
  				case 'localization.searchResultFor':
  					settings.localization.searchResultFor = String(value);
  					break;
                case 'localization.showingCategory':
  					settings.localization.showingCategory = String(value);
  					break;
  				case 'localization.showAllPosts':
  					settings.localization.showAllPosts = String(value);
  					break;
  				case 'localization.inCategory':
  					settings.localization.inCategory = String(value);
  					break;
  				case 'localization.sortedBy':
  					settings.localization.sortedBy = String(value);
  					break;
                case 'localization.enhancedSearch':
  					settings.localization.enhancedSearch = String(value);
  					break;
                // State
  				case 'localization.loading':
  					settings.localization.loading = String(value);
  					break;
  				case 'localization.searching':
  					settings.localization.searching = String(value);
  					break;
  				case 'localization.verifyingUrl':
  					settings.localization.verifyingUrl = String(value);
  					break;
                // Message and Info
  				case 'localization.enterValidUrl':
  					settings.localization.enterValidUrl = String(value);
  					break;
  				case 'localization.noResults':
  					settings.localization.noResults = String(value);
  					break;
                case 'localization.invalidBlogUrl':
  					settings.localization.invalidBlogUrl = String(value);
  					break;
  				case 'localization.errorCheckingUrl':
  					settings.localization.errorCheckingUrl = String(value);
  					break;
  				case 'localization.errorLoadingPosts':
  					settings.localization.errorLoadingPosts = String(value);
  					break;
  				case 'localization.errorLoadingLabels':
  					settings.localization.errorLoadingLabels = String(value);
  					break;
  				case 'localization.errorPerformingSearch':
  					settings.localization.errorPerformingSearch = String(value);
  					break;
  				case 'localization.errorLoadingMore':
  					settings.localization.errorLoadingMore = String(value);
  					break;
  				case 'localization.adjustSearchCriteria':
  					settings.localization.adjustSearchCriteria = String(value);
  					break;
				case 'localization.failedInitializeSearch':
  					settings.localization.failedInitializeSearch = String(value);
  					break;
                case 'localization.failedLoadContent':
  					settings.localization.failedLoadContent = String(value);
  					break;
				case 'localization.errorLoadingCategories':
  					settings.localization.errorLoadingCategories = String(value);
  					break;
                // Action and Navigation
                case 'localization.loadMore':
  					settings.localization.loadMore = String(value);
  					break;
  				case 'localization.backToTop':
  					settings.localization.backToTop = String(value);
  					break;
  				case 'localization.bottomBackToTop':
  					settings.localization.bottomBackToTop = String(value);
  					break;
  				case 'localization.tryAgain':
  					settings.localization.tryAgain = String(value);
  					break;
                case 'localization.retryButton':
  					settings.localization.retryButton = String(value);
  					break;
                // Select Option
                case 'localization.newPublished':
  					settings.localization.newPublished = String(value);
  					break;
  				case 'localization.newUpdated':
  					settings.localization.newUpdated = String(value);
  					break;
  				case 'localization.mostRelevance':
  					settings.localization.mostRelevance = String(value);
  					break;
  				case 'localization.allCategories':
  					settings.localization.allCategories = String(value);
  					break;
                case 'localization.enhancedSearch':
  					settings.localization.enhancedSearch = String(value);
                // Date Localization
  				case 'localization.monthNames':
  					settings.localization.monthNames = value.split(',').map(tag => tag.trim());
  					break;
  				case 'localization.monthNamesShort':
  					settings.localization.monthNamesShort = value.split(',').map(tag => tag.trim());
  					break;
  				case 'localization.dayNames':
  					settings.localization.dayNames = value.split(',').map(tag => tag.trim());
  					break;
  				case 'localization.dayNamesShort':
  					settings.localization.dayNamesShort = value.split(',').map(tag => tag.trim());
  					break;
                
                // License Contact
                case 'license.addOnContactLink':
  					settings.license.addOnContactLink = String(value);
  					break;
                case 'license.addOnNewsLink':
  					settings.license.addOnNewsLink = String(value);
  					break;
                case 'license.addOnLearnMoreMessage':
  					settings.license.addOnLearnMoreMessage = String(value);
  					break;
                case 'license.addOnLearnMoreTitle':
  					settings.license.addOnLearnMoreTitle = String(value);
  					break;
                case 'license.addOnLearnMoreLink':
  					settings.license.addOnLearnMoreLink = String(value);
  					break;
                case 'license.addOnDocMessage':
  					settings.license.addOnDocMessage = String(value);
  					break;
                case 'license.addOnDocTitle':
  					settings.license.addOnDocTitle = String(value);
  					break;
                case 'license.addOnDocLink':
  					settings.license.addOnDocLink = String(value);
  					break;
  				// License Message and Alert
  				case 'license.licenseRemark':
  					settings.license.licenseRemark = String(value);
  					break;
                case 'license.noLicenseMatch':
  					settings.license.noLicenseMatch = String(value);
  					break;
                case 'license.licenseRemark':
  					settings.license.licenseRemark = String(value);
  					break;
                case 'license.licenseAlert':
  					settings.license.licenseAlert = String(value);
  					break;
  				case 'license.licenseUpgradePrompt':
  					settings.license.licenseUpgradePrompt = String(value);
  					break;
                // License Setting
                case 'license.sheetLoadedMessage':
  					settings.license.sheetLoadedMessage = String(value);
  					break;
                case 'license.sheetLoadedTitle':
  					settings.license.sheetLoadedTitle = String(value);
  					break;
                case 'license.noSheetMessage':
  					settings.license.noSheetMessage = String(value);
  					break;
                case 'license.noSheetTitle':
  					settings.license.noSheetTitle = String(value);
  					break;
                case 'license.sheetLoadFailedMessage':
  					settings.license.sheetLoadFailedMessage = String(value);
  					break;
                case 'license.sheetLoadFailedTitle':
  					settings.license.sheetLoadFailedTitle = String(value);
  					break;
                case 'license.liteMessage':
  					settings.license.liteMessage = String(value);
  					break;
                case 'license.liteTitle':
  					settings.license.liteTitle = String(value);
  					break;
                
                // Core Colors
                case 'css.primaryColor':
                    settings.css.primaryColor = String(value);
                    break;
                case 'css.secondaryColor':
                    settings.css.secondaryColor = String(value);
                    break;
                case 'css.accentColor':
                    settings.css.accentColor = String(value);
                    break;
                case 'css.successColor':
                    settings.css.successColor = String(value);
                    break;
                // Background Colors
                case 'css.bgMain':
                    settings.css.bgMain = String(value);
                    break;
                case 'css.bgSecondary':
                    settings.css.bgSecondary = String(value);
                    break;
                // Text Colors
                case 'css.textMain':
                    settings.css.textMain = String(value);
                    break;
                case 'css.textSecondary':
                    settings.css.textSecondary = String(value);
                    break;
                case 'css.textMuted':
                    settings.css.textMuted = String(value);
                    break;

  				// Default to string value for any other keys
  				default:
  					if (key.startsWith('localization.')) {
  						const textKey = key.replace('localization.', '');
  						if (settings.localization.hasOwnProperty(textKey)) {
  							settings.localization[textKey] = String(value);
  						}
  					}
  					break;
  			}
  		}

  		return settings;
  	}

	// Verify domain/page matches license
  	function bisVerifyLicenseDomain(licenseData) {
  		const currentDomain = window.location.hostname;
  		const currentUrl = bisConfig.url + window.location.pathname;

  		if (!licenseData.domainOrPage) {
  			return false;
  		}

  		const licensedValue = licenseData.domainOrPage.trim();
  		const cleanLicensedValue = licensedValue.split('?')[0].replace(/\/$/, '');
  		const cleanCurrentUrl = currentUrl.replace(/\/$/, '');

  		// Check for exact URL match
  		if (cleanCurrentUrl === cleanLicensedValue) {
  			return true;
  		}

  		// Check for domain match
  		const cleanLicensedDomain = cleanLicensedValue.replace(/^(https?:\/\/)?(www\.)?/, '');
  		const cleanCurrentDomain = currentDomain.replace(/^(www\.)?/, '');

  		if (cleanCurrentDomain === cleanLicensedDomain) {
  			return true;
  		}

  		// Check for protocol variations
  		const licensedWithoutProtocol = cleanLicensedValue.replace(/^https?:\/\//, '');
  		const currentWithoutProtocol = cleanCurrentUrl.replace(/^https?:\/\//, '');

  		if (currentWithoutProtocol === licensedWithoutProtocol) {
  			return true;
  		}
  		
  		return false;
  	}

  	// Check license in master sheet - only check status and domain
    async function bisCheckLicenseInMasterSheet(licenseKey) {
        try {
            if (!bisConfig.licenseMasterSheetId) {
                return null;
            }

            const masterData = await bisFetchGoogleSheetData(bisConfig.licenseMasterSheetId);
            const rows = masterData.table.rows;

            // Column indices
            const COLS = { KEY: 0, DOMAIN: 1, STATUS: 2, SHEET_ID: 6, TYPE: 5, REMARK: 7, ALERT: 8, GLOBAL_COL: 11 };

            // Get value from second row (index 1)
            const masterRow = rows.length > 0 ? rows[0] : null;
            const getMasterRowVal = (idx) => masterRow?.c?.[idx]?.v;
            globalColValue = getMasterRowVal(COLS.GLOBAL_COL);

            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                const getVal = (idx) => row.c?.[idx]?.v;

                const rowKey = getVal(COLS.KEY);
                if (rowKey && String(rowKey) === String(licenseKey)) {
                    const licenseData = {
                        licenseKey: rowKey,
                        domainOrPage: getVal(COLS.DOMAIN),
                        status: getVal(COLS.STATUS) ? String(getVal(COLS.STATUS)).toLowerCase() : null,
                        sheetId: getVal(COLS.SHEET_ID),
                        licenseType: getVal(COLS.TYPE) ? String(getVal(COLS.TYPE)).toLowerCase() : null,
                        licenseRemark: getVal(COLS.REMARK) ? String(getVal(COLS.REMARK)) : null,
                        licenseAlert: getVal(COLS.ALERT) ? String(getVal(COLS.ALERT)) : null,
                        globalCol: globalColValue
                    };

                    // Only check status and domain
                    if (licenseData.status !== 'active' && licenseData.status !== 'never expire' && licenseData.status !== 'expire soon') {
                        return null;
                    }

                    if (!bisVerifyLicenseDomain(licenseData)) {
                        return null;
                    }

                    return licenseData;
                }
            }

            return null;

        } catch (error) {
            console.error('License check error:', error);
            return null;
        }
    }

  	// Handle license key verification
  	async function bisHandleLicenseKey(licenseKey) {
        try {
            const licenseData = await bisCheckLicenseInMasterSheet(licenseKey);

            if (!licenseData) {
                bisSheetStatus = 'unknown';
                return await bisHandleNoLicense();
            }

            // Check if sheet ID exists in master
            if (!licenseData.sheetId) {
                bisSheetStatus = 'no_sheet';
                bisLicenseVerified = true;

              	// Try to get free version settings from HARDCODED sheet first
                try {
                    const freeSheetData = await bisFetchGoogleSheetData(bisConfig.freeVersionSheetId);
                    const keyValueData = freeSheetData.table.rows.slice(1);
                    const sheetSettings = bisConvertKeyValueToSettings(keyValueData);

                    bisSettingConfig = sheetSettings;

                } catch (sheetError) {
                    console.error('Failed to load free version settings from hardcoded GS:', sheetError);
                    // Fallback to free version with limited features
  					bisSettingConfig = JSON.parse(JSON.stringify(defaultSettings));
                }
              
                return {
                    verified: true,
                    type: licenseData.licenseType || 'active',
                    value: licenseData.domainOrPage,
                    // (No custom setting)
                    message: `${licenseData.licenseType || 'full'} ${bisSettingConfig.license.licenseMatch}`,
                    remark: licenseData.licenseRemark || '❓',
                    alert: `${licenseData.licenseAlert || bisSettingConfig.license.licenseAlert}`,
                    source: 'license_key_no_sheet'
                };
            }

            // Try to load settings from sheet
            try {
                const sheetData = await bisFetchGoogleSheetData(licenseData.sheetId);
                const keyValueData = sheetData.table.rows.slice(1);
                const sheetSettings = bisConvertKeyValueToSettings(keyValueData);

                bisSettingConfig = sheetSettings;
                bisLicenseVerified = true;
                bisSettingConfig.userSheetId = licenseData.sheetId;
                bisSheetStatus = 'loaded';

                return {
                    verified: true,
                    type: licenseData.licenseType || 'active',
                    value: licenseData.domainOrPage,
                    message: `${licenseData.licenseType || 'full'} ${bisSettingConfig.license.licenseMatch}`,
                    remark: licenseData.licenseRemark || '✓',
                    alert: `${licenseData.licenseAlert || bisSettingConfig.license.licenseAlert}`,
                    source: 'license_key',
                    sheetId: licenseData.sheetId
                };

            } catch (sheetError) {
                console.error('Failed to load settings from license DB:', sheetError);
                bisLicenseVerified = true;
                bisSheetStatus = 'load_failed';
              
              	// Try to get free version settings from HARDCODED sheet first
                try {
                    const freeSheetData = await bisFetchGoogleSheetData(bisConfig.freeVersionSheetId);
                    const keyValueData = freeSheetData.table.rows.slice(1);
                    const sheetSettings = bisConvertKeyValueToSettings(keyValueData);

                    bisSettingConfig = sheetSettings;

                } catch (sheetError) {
                    console.error('Failed to load free version settings from hardcoded GS:', sheetError);
                    // Fallback to free version with limited features
  					bisSettingConfig = JSON.parse(JSON.stringify(defaultSettings));
                }
              
                return {
                    verified: true,
                    type: licenseData.licenseType || 'active',
                    value: licenseData.domainOrPage,
                    // (Setting load failed)
                    message: `${licenseData.licenseType || 'full'} ${bisSettingConfig.license.licenseMatch}`,
                    remark: licenseData.licenseRemark || '❗',
                    alert: `${licenseData.licenseAlert || bisSettingConfig.license.licenseAlert}`,
                    source: 'license_key_sheet_error'
                };
            }

        } catch (error) {
            console.error('License key verification failed:', error);
            bisSheetStatus = 'unknown';
            return await bisHandleNoLicense();
        }
    }

  	// Handle No license specified
  	async function bisHandleNoLicense() {
  		// Try to get free version settings from HARDCODED sheet first
  		if (bisConfig.freeVersionSheetId) {
  			try {
  				const freeSheetData = await bisFetchGoogleSheetData(bisConfig.freeVersionSheetId);

  				// Convert sheet data to settings (no license check for free version)
  				const keyValueData = freeSheetData.table.rows.slice(1);
  				const sheetSettings = bisConvertKeyValueToSettings(keyValueData);

  				bisSettingConfig = sheetSettings;

  				return {
  					verified: false,
  					type: 'lite',
  					value: 'Hardcoded Sheet',
                    message: `${bisSettingConfig.license.noLicenseMatch}`,
  					source: 'hardcoded_sheet'
  				};

  			} catch (sheetError) {
  				console.error('Failed to load free version settings from hardcoded GS:', sheetError);
  			}
  		}

  		// Final fallback to hardcoded free version settings
  		bisSettingConfig = JSON.parse(JSON.stringify(defaultSettings));

  		return {
  			verified: false,
  			type: 'free',
  			message: "No license - Limited functionality",
  			source: 'hardcoded'
  		};
  	}

  	// License verification function
  	async function bisVerifyLicense() {
  		try {
  			const licenseInfo = bisParseLicenseData();

  			// If $license= key is provided, use license key verification
  			if (licenseInfo.licenseKey) {
  				return await bisHandleLicenseKey(licenseInfo.licenseKey);
  			}

  			// No license specified, use hardcoded free version
  			return await bisHandleNoLicense();

  		} catch (error) {
  			console.error('License verification failed:', error);
  			// Fallback to free version with limited features
  			bisSettingConfig = JSON.parse(JSON.stringify(defaultSettings));
  			return {
  				verified: false,
  				type: 'error',
  				message: "License verification failed! Using free version with limited features.",
  				source: 'error'
  			};
  		}
  	}
    
    // =============================================================================
    // UI COMPONENTS (License badge, admin settings)
    // =============================================================================
    // Add license badge
    function bisAddLicenseBadge(licenseResult) {
  		const licenseBadge = document.createElement('div');
  		licenseBadge.className = 'bis-license-badge';

  		let badgeContent = '';

  		if (licenseResult.verified) {
  			// Different styling for different license types
  			if (licenseResult.type === 'trial') {
  				badgeContent = `
                               <div class="bis-license-info bis-trial" title="${licenseResult.message} | ${licenseResult.remark || '- Expires soon'}">
                                   <i class="${bisSettingConfig.icons.crown}"></i>
                                   <span class="license-text">Trial Version ${licenseResult.remark}
                                   <a href="${bisSettingConfig.license.addOnLearnMoreLink}" target="_blank">														<small>${bisSettingConfig.license.licenseUpgradePrompt}</small></span></a>
                               </div>
                           `;
  			} else if (licenseResult.type === 'lite') {
  				badgeContent = `
                               <div class="bis-license-info bis-free" title="${licenseResult.message} | ${licenseResult.remark}">
                                   <i class="${bisSettingConfig.icons.lock}"></i>
                                   <span class="license-text">Lite Version ${licenseResult.remark}
                                   <a href="${bisSettingConfig.license.addOnLearnMoreLink}" target="_blank">														<small>${bisSettingConfig.license.licenseUpgradePrompt}</small></span></a>
                               </div>
                           `;
  			} else {
  				// Licensed (domain/page)
  				badgeContent = `
                               <div class="bis-license-info bis-licensed" title="${licenseResult.message} | ${licenseResult.remark}">
                                   <i class="${bisSettingConfig.icons.crown}"></i>
                                   <span class="license-text">Licensed <a href="${bisSettingConfig.license.addOnLearnMoreLink}" target="_blank">𓊆${licenseResult.type} • ${licenseResult.remark}𓊇</span></a>
                               </div>
                           `;
  			}
  		} else {
  			// Not verified - free version
  			badgeContent = `
                           <div class="bis-license-info bis-free" title="${licenseResult.message}">
                               <i class="${bisSettingConfig.icons.lock}"></i>
                               <span class="license-text">Free Demo ${bisSettingConfig.license.licenseRemark}
                               <a href="${bisSettingConfig.license.addOnLearnMoreLink}" target="_blank">														<small>${bisSettingConfig.license.licenseUpgradePrompt}</small></span></a>
                           </div>
                       `;
  		}

  		licenseBadge.innerHTML = badgeContent;

  		const headerSection = document.querySelector('.bis-header-section');
  		if (headerSection) {
  			headerSection.appendChild(licenseBadge);
  		}

  		// Add debug info to console
  	}
    
    // Add settings badge
    async function bisAddAdminSettingsButton(licenseResult) {
        if (!bisIsBlogAdmin()) return;
      
      	// Text value fron sheet
      	const globalValues = parseGlobalValue();
      	// Check version
        const version = await bisGetVersion();
      	// Compare version
        const currentVersion = version || "1.0.0";
        const latestVersion = globalValues.addOnVersion || "1.0.0";
      	const compareVersion = bisCompareVersions(currentVersion, latestVersion);

        const settingsMessage = bisGetSettingsSheetMessage(licenseResult);
        const tooltipText = bisGetSettingsTooltip(licenseResult);

        const settingsBadge = document.createElement('div');
        settingsBadge.className = 'bis-admin-settings-badge';

        settingsBadge.innerHTML = `
            <div class="bis-settings-icon" onclick="bisToggleSettingsMenu()">
                <i class="${bisSettingConfig.icons.cog}">
                  ${licenseResult?.alert?.toLowerCase() === "expire soon" || 
                    licenseResult?.alert?.toLowerCase()?.includes("*") || 
                    compareVersion !== 0 ? " | 🔔" : ""}
                </i>
            </div>
            <div class="bis-settings-links">
                ${(() => {
                    const cleanAlert = (text) => text?.replace(/\s*\*\s*/g, ' ').trim();
                    const alertText = cleanAlert(licenseResult?.alert);
                    const hasAlertCondition = licenseResult?.alert?.toLowerCase() === "expire soon" || licenseResult?.alert?.toLowerCase()?.includes("*");

                    if (hasAlertCondition || compareVersion !== 0) {
                        return `${licenseResult?.remark ? `<span class="bis-license-alert" title="${licenseResult.message?.charAt(0).toUpperCase() + licenseResult.message?.slice(1) || ''} - ${globalValues.addOnVersion ? `${'New Updated: '}` + `${'v-'}` + globalValues.addOnVersion : licenseResult.remark} ${globalValues.settingsTooltip ? '\n' + globalValues.settingsTooltip : ''}">𓊆${version ? `v-${version}` : licenseResult.remark}𓊇 - ${alertText}<a href="${globalValues.addOnNewsLink || bisSettingConfig.license.addOnNewsLink}" target="_blank">🔗</a></span>` : ""}`;
                    } else {
                        return licenseResult?.remark ? `<span class="bis-license-alert" title="${licenseResult.message?.charAt(0).toUpperCase() + licenseResult.message?.slice(1) || ''} - ${globalValues.addOnVersion ? `${'New Updated: '}` + `${'v-'}` + globalValues.addOnVersion : licenseResult.remark}  ${globalValues.settingsTooltip ? '\n' + globalValues.settingsTooltip : ''}">𓊆${version ? `v-${version}` : licenseResult.remark}𓊇 - ${alertText}</span>` : '';
                    }
                })()}
                <a href="${globalValues.addOnDocLink || bisSettingConfig.license.addOnDocLink}" target="_blank" title="${bisSettingConfig.license.addOnDocTitle}">
                    <i class="${bisSettingConfig.icons.book}"></i>
                    ${bisSettingConfig.license.addOnDocMessage}
                </a>
                <a href="${bisGetSettingsSheetUrl(licenseResult)}" target="_blank" title="${tooltipText}">
                    <i class="${bisSettingConfig.icons.edit}"></i>
                    ${settingsMessage}
                </a>
            </div>
        `;

        const headerSection = document.querySelector('.bis-header-section');
        if (headerSection) {
            headerSection.appendChild(settingsBadge);
        }
    }
    
    // Get settings sheet message based on sheet status
    function bisGetSettingsSheetMessage(licenseResult) {
        if (bisLicenseVerified && licenseResult?.type !== "lite") {
            switch (bisSheetStatus) {
                case 'loaded':
                    return bisSettingConfig.license.sheetLoadedMessage; // Have ID and loaded successfully
                case 'no_sheet':
                    return bisSettingConfig.license.noSheetMessage; // No sheet ID in master
                case 'load_failed':
                    return bisSettingConfig.license.sheetLoadFailedMessage; // Have ID but failed to load
                default:
                    return bisSettingConfig.license.addOnLearnMoreMessage; // Fallback
            }
        } else {
            return bisSettingConfig.license.liteMessage; // Free version
        }
    }

    // Get settings sheet URL for all scenarios
    function bisGetSettingsSheetUrl(licenseResult) {   
      const globalValues = parseGlobalValue();
      
      if (bisLicenseVerified && licenseResult?.type !== "lite") {
        switch (bisSheetStatus) {
          case 'loaded':
            // Have ID and loaded successfully - open their sheet
            return `${bisConfig.sheets.baseUrl}${bisSettingConfig.userSheetId}/edit`;
          case 'no_sheet':
            // No sheet ID - open master sheet so they can add their sheet ID
            return bisSettingConfig.license.addOnContactLink;
          case 'load_failed':
            // Have ID but failed to load - open their sheet so they can fix it
            return bisSettingConfig.userSheetId ? `${bisConfig.sheets.baseUrl}${bisSettingConfig.userSheetId}/edit` : globalValues.addOnContactLink || bisSettingConfig.license?.addOnContactLink;
          default:
            return bisSettingConfig.license.addOnLearnMoreLink;
        }
      } else {
        // Free version - open free settings sheet
        return globalValues.addOnContactLink || bisSettingConfig.license.addOnContactLink;
      }
    }

    // Get settings tooltip
    function bisGetSettingsTooltip(licenseResult) {
        if (bisLicenseVerified && licenseResult?.type !== "lite") {
            switch (bisSheetStatus) {
                case 'loaded':
                    return bisSettingConfig.license.sheetLoadedTitle;
                case 'no_sheet':
                    return bisSettingConfig.license.noSheetTitle;
                case 'load_failed':
                    return bisSettingConfig.license.sheetLoadFailedTitle;
                default:
                    return bisSettingConfig.license.addOnLearnMoreTitle;
            }
        } else {
            return bisSettingConfig.license.liteTitle;
        }
    }
    
    // Get add-on version from script link in html document
    async function bisGetVersion() {
        // Wait a bit for scripts to load
        await new Promise(resolve => setTimeout(resolve, 100));

        // Check all scripts
        const scripts = document.querySelectorAll('script');
      	// Text value fron sheet
      	const globalValues = parseGlobalValue();

        for (const script of scripts) {
            const src = script.src;
            if (src && src.includes(globalValues.scriptName)) {
                const match = src.match(/(\d+\.\d+\.\d+)/);
                return match ? match[1] : 'unknown';
            }
        }

        return null;
    }
    
    function bisCompareVersions(version1, version2) {
        // Handle null/undefined cases
        if (!version1 || !version2) {
            throw new Error('Both version strings must be provided');
        }

        // Split versions into arrays of numbers
        const v1Parts = version1.split('.').map(Number);
        const v2Parts = version2.split('.').map(Number);

        // Validate both versions have exactly 3 parts (major.minor.patch)
        if (v1Parts.length !== 3 || v2Parts.length !== 3 || 
            v1Parts.some(isNaN) || v2Parts.some(isNaN)) {
            throw new Error('Versions must be in format major.minor.patch (e.g., 1.2.3)');
        }

        // Compare each part
        for (let i = 0; i < 3; i++) {
            if (v1Parts[i] > v2Parts[i]) return 1;
            if (v1Parts[i] < v2Parts[i]) return -1;
        }

        return 0; // Versions are equal
    }
    
    // Toggle settings menu
    function bisToggleSettingsMenu(event) {
        const links = bisDomCache.query('.bis-settings-links');
        if (!links) return;

        isMenuOpen = !links.classList.contains('show');
        links.classList.toggle('show');

        if (event) {
            event.stopPropagation();
        }
    }

    // Close links when clicking outside (admin badge)
    document.addEventListener('click', function(event) {
        const settingsBadge = bisDomCache.query('.bis-admin-settings-badge');
        const links = bisDomCache.query('.bis-settings-links');

        // Early returns for cleaner code
        if (!settingsBadge || !links) return;

        // Check if click is outside both badge AND links
        const isClickInside = settingsBadge.contains(event.target) || 
                             links.contains(event.target);

        if (!isClickInside && links.classList.contains('show')) {
            links.classList.remove('show');
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const links = bisDomCache.query('.bis-settings-links');
            if (links && links.classList.contains('show')) {
                links.classList.remove('show');
                isMenuOpen = false;
            }
        }
    });

    // =============================================================================
    // HTML TEMPLATES
    // =============================================================================
    async function bisCreateAndRenderTemplate() {
        // Wait for admin check if not done
        if (!bisIsAdminChecked) {
          	return `<div class="bis-verify">Checking permissions...</div>`;
            await bisCheckAdminOnce();
        }

        return bisCreateHTMLStructure();
    }
    
    function bisCreateHTMLStructure() {
        // Calculate which features should be visible
        const showBlogUrlSelector = bisIsFeatureVisible(bisSettingConfig.features.blogUrlSelector);
        const showSitemapLink = bisIsFeatureVisible(bisSettingConfig.admin.sitemapLink);
        const showSort = bisIsFeatureVisible(bisSettingConfig.features.sort);
        const showLabelFilter = bisIsFeatureVisible(bisSettingConfig.features.labelFilter);
        const showTextSearch = bisIsFeatureVisible(bisSettingConfig.features.textSearch);
        const showLayoutSwitcher = bisIsFeatureVisible(bisSettingConfig.features.layoutSwitcher);
        const showBottomBackToTop = bisIsFeatureVisible(bisSettingConfig.content.bottomBackToTopButton);
        const showRatioButtons = bisIsSearchStrategyVisible();

        // Use the safe wrapper functions
        const getDisabledAttr = (feature) => {
            try {
                if (!bisIsAdminChecked) return 'disabled';
                return bisIsFeatureFunctional(feature) ? '' : 'disabled';
            } catch (error) {
                return 'disabled';
            }
        };

        const getDisabledClass = (feature) => {
            try {
                if (!bisIsAdminChecked) return 'bis-disabled';
                return bisIsFeatureFunctional(feature) ? '' : 'bis-disabled';
            } catch (error) {
                return 'bis-disabled';
            }
        };

        // Get current search strategy option
        const currentOption = bisGetSelectedSearchStrategy();

        return `
            <div class="bis-wrapper">
                <div class="bis-header-section">
                    <h1 class="bis-search-title">${bisSettingConfig.localization.searchTitle}</h1>
                    <p class="bis-subtitle">${bisSettingConfig.localization.searchSubtitle}</p>
                </div>

                <div class="bis-content-section">
                    <!-- Blog URL selector -->
                    ${showBlogUrlSelector ? `
                    <div class="bis-selector">
                        <div class="bis-selector-flex">
                            <div class="bis-selector-input-group">
                                <label class="bis-selector-label">
                                    <i class="${bisSettingConfig.icons.link}"></i> ${bisSettingConfig.localization.blogUrlLabel}
                                </label>
                                <input
                                    class="bis-selector-input ${getDisabledClass(bisSettingConfig.features.blogUrlSelector)}"
                                    id="bisBlogUrl"
                                    placeholder="${bisIsblogUrlSelectorFunctional() ? bisSettingConfig.localization.blogUrlPlaceholder : bisSettingConfig.localization.blogUrlDisablePlaceholder}"
                                    type="text"
                                    value=""
                                    ${getDisabledAttr(bisSettingConfig.features.blogUrlSelector)}
                                />
                            </div>
                            <button class="bis-selector-button ${getDisabledClass(bisSettingConfig.features.blogUrlSelector)}" onclick="bisSetBlogUrl()" ${getDisabledAttr(bisSettingConfig.features.blogUrlSelector)}>
                                <i class="${bisSettingConfig.icons.rocket}"></i> ${bisSettingConfig.localization.setUrlButton}
                            </button>
                        </div>
                    </div>
                    ` : ''}

                    <!-- Search controls -->
                    <div class="bis-search-controls">
                        <div class="bis-control-group">
                            <!-- Combined Sort by and Filter by row -->
                            ${showSort || showLabelFilter ? `
                            <div class="bis-control-item bis-combined-filters">
                                ${showSort ? `
                                <div class="bis-control-subitem">
                                    <div class="bis-control-label-wrapper">
                                        <label for="bisOrderFeedBy">
                                            <i class="${bisSettingConfig.icons.sort}"></i> ${bisSettingConfig.localization.sortByLabel}
                                        </label>
                                    </div>
                                    <div class="bis-control-input-wrapper">
                                        <select id="bisOrderFeedBy" class="bis-control-select ${getDisabledClass(bisSettingConfig.features.sort)}" ${getDisabledAttr(bisSettingConfig.features.sort)}>
                                            <option value="published">${bisSettingConfig.localization.newPublished}</option>
                                            <option value="updated">${bisSettingConfig.localization.newUpdated}</option>
                                            <option value="relevance" style="display: none;">${bisSettingConfig.localization.mostRelevance}</option>
                                        </select>
                                    </div>
                                </div>
                                ` : ''}

                                ${showLabelFilter ? `
                                <div class="bis-control-subitem">
                                    <div class="bis-control-label-wrapper">
                                        <label for="bisLabelSorter">
                                            <i class="${bisSettingConfig.icons.filter}"></i> ${bisSettingConfig.localization.filterByLabel}
                                        </label>
                                    </div>
                                    <div class="bis-control-input-wrapper">
                                        <div id="bisLabelSorter" class="bis-label-search-container ${getDisabledClass(bisSettingConfig.features.labelFilter)}" ${getDisabledAttr(bisSettingConfig.features.labelFilter)}>
                                            <div class="bis-label-search-wrapper">
                                                <input type="text" 
       class="bis-label-search-input ${getDisabledClass(bisSettingConfig.features.labelFilter)}" 
       placeholder="${bisIsLabelFilterFunctional() ? bisSettingConfig.localization.searchCategories : bisSettingConfig.localization.allCategories}" 
       ${!bisIsLabelFilterFunctional() ? 'disabled' : ''} 
       ${!bisIsFeatureFunctional(bisSettingConfig.features.labelTextFilter) ? 'readonly style="cursor: pointer;"' : ''}>
                                                <div class="bis-label-search-dropdown">
                                                    <div class="bis-label-search-options">
                                                        <div class="bis-label-option" data-value="">${bisSettingConfig.localization.allCategories}</div>
                                                        <div class="bis-label-loading">${bisIsLabelFilterFunctional() ? bisSettingConfig.localization.loading : bisSettingConfig.localization.searchCategories}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ` : ''}
                            </div>
                            ` : ''}

                            ${showTextSearch ? ` 
                            <div class="bis-control-item">
                                <div class="bis-control-label-wrapper">
                                    <label for="bisSearchInput">
                                        <span><i class="${bisSettingConfig.icons.search}"></i> ${bisSettingConfig.localization.searchLabel}</span>

                                        ${showRatioButtons ? ` 
                                        <select id="bisSearchStrategy" class="bis-control-select ${getDisabledClass(bisSettingConfig.features.textSearch)}" onchange="bisChangeSearchStrategy(this.value)" ${getDisabledAttr(bisSettingConfig.features.textSearch)}>
                                            <option value="blogger-only" ${currentOption === 'blogger-only' ? 'selected' : ''}>
                                                Blogger Only (Standard)
                                            </option>
                                            <option value="blogger-first" ${currentOption === 'blogger-first' ? 'selected' : ''}>
                                                Blogger First → Enhanced
                                            </option>
                                            <option value="auto" ${currentOption === 'auto' ? 'selected' : ''}>
                                                Auto (Smart Selection)
                                            </option>
                                            <option value="enhanced-first" ${currentOption === 'enhanced-first' ? 'selected' : ''}>
                                                Enhanced First → Blogger
                                            </option>
                                            <option value="enhanced-only" ${currentOption === 'enhanced-only' ? 'selected' : ''}>
                                                Enhanced Only (Client-side)
                                            </option>
                                        </select>
                                        ` : ''}

                                        <div class="bis-search-help">
                                            ${showSitemapLink ? `
                                            <span>
                                                <a href="javascript:void(0)" onclick="bisOpenSitemap()" ${getDisabledAttr(bisSettingConfig.admin.sitemapLink)}>
                                                    <i class="${bisSettingConfig.icons.sitemap}"></i> ${bisSettingConfig.localization.sitemapLink}
                                                </a>
                                            </span>
                                            ` : ''}
                                            <small>${bisSettingConfig.localization.searchOperators}</small>
                                        </div>
                                    </label>
                                </div>
                                <div class="bis-control-input-wrapper">
                                    <form id="bisPostSearcher">
                                        <div class="bis-search-input-wrapper">
                                            <input
                                                id="bisSearchInput"
                                                class="bis-control-input ${getDisabledClass(bisSettingConfig.features.textSearch)}"
                                                placeholder="${bisIsTextSearchFunctional() ? bisSettingConfig.localization.searchPlaceholder : bisSettingConfig.localization.searchDisablePlaceholder}"
                                                type="text"
                                                disabled
                                                ${getDisabledAttr(bisSettingConfig.features.textSearch)}
                                            />
                                            <button type="submit" class="bis-search-button ${getDisabledClass(bisSettingConfig.features.textSearch)}" ${getDisabledAttr(bisSettingConfig.features.textSearch)}>
                                                <i class="${bisSettingConfig.icons.magnifyingGlass}"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            ` : ''}
                        </div>
                    </div>

                    ${showLayoutSwitcher ? `
                    <div class="bis-layout-selector">
                        <div class="bis-layout-option ${getDisabledClass(bisSettingConfig.features.layoutSwitcher)}" data-layout="card" onclick="bisChangeLayout('card')" ${getDisabledAttr(bisSettingConfig.features.layoutSwitcher)}>
                            <i class="${bisSettingConfig.icons.grid}"></i> Card
                        </div>
                        <div class="bis-layout-option ${getDisabledClass(bisSettingConfig.features.layoutSwitcher)}" data-layout="list" onclick="bisChangeLayout('list')" ${getDisabledAttr(bisSettingConfig.features.layoutSwitcher)}>
                            <i class="${bisSettingConfig.icons.list}"></i> List
                        </div>
                        <div class="bis-layout-option ${getDisabledClass(bisSettingConfig.features.layoutSwitcher)}" data-layout="minimal" onclick="bisChangeLayout('minimal')" ${getDisabledAttr(bisSettingConfig.features.layoutSwitcher)}>
                            <i class="${bisSettingConfig.icons.minimal}"></i> Minimal
                        </div>
                    </div>
                    ` : ''}

                    <div id="bisResultDesc" class="bis-result-description"></div>
                    <div id="bisFeedContainer" class="bis-feed-container"></div>
                    <div id="bisFeedNav" class="bis-feed-navigation">
                        <div class="bis-loading-state">
                            <i class="${bisSettingConfig.icons.loading}"></i> ${bisSettingConfig.localization.loading}
                        </div>
                    </div>
                    
                    ${showBottomBackToTop ? `
                    <div class="bis-feed-navigation bottom">
                        <button onclick="bisBottomScrollToTop()" class="bis-nav-button front ${getDisabledClass(bisSettingConfig.content.bottomBackToTopButton)}" ${getDisabledAttr(bisSettingConfig.content.bottomBackToTopButton)}>
                            <i class="${bisSettingConfig.icons.arrowUp}"></i> ${bisSettingConfig.localization.bottomBackToTop}
                        </button>
                    </div>
                    ` : ''}
                
                </div>
            </div>
        `;
    }
    
    // =============================================================================
    // CACHE MANAGEMENT
    // =============================================================================
    // Cache warm-up
    function bisWarmSearchCache() {
        // Don't warm cache for modes that don't need it
        if (bisIsSearchModeBloggerOnly()) {
            return;
        }

        // For auto mode, only warm cache if we have permission
        if (bisIsSearchModeAuto() && !bisIsEnhancedSearchFunctional()) {
            return;
        }

        // For enhanced-first or enhanced-only, always warm if we have permission
        if ((bisIsSearchModeEnhancedFirst() || bisIsSearchModeEnhancedOnly()) && !bisIsEnhancedSearchFunctional()) {
            return;
        }

        // Don't start loading if already loaded or loading
        if (bisCacheLoaded || bisCacheLoading) {
            return;
        }

        // Show loading indicator
        showCacheStatus('loading', 'Preparing comprehensive search... Loading all posts.');

        // Start loading ALL posts in background
        bisLoadAllPostsForSearch()
            .then(allPosts => {
                showCacheStatus('loaded', `Search index ready`);
                setTimeout(() => {
                    hideCacheStatus();
                }, 3000);
            })
            .catch(error => {
                console.error('Failed to load comprehensive cache:', error);
                showCacheStatus('error', 'Failed to load search index. Using limited search.');
                setTimeout(() => {
                    hideCacheStatus();
                }, 2000);
            });
    }
    
    // Save cache to localStorage
    function bisSaveCacheToStorage() {
        try {
            const cacheData = {
                posts: bisAllPostsCache,
                url: bisConfig.url,
                timestamp: Date.now()
            };
            localStorage.setItem('bis_search_cache', JSON.stringify(cacheData));
        } catch (error) {
            console.error('Error saving cache:', error);
        }
    }

    // Load cache from localStorage
    function bisLoadCacheFromStorage() {
        try {
            const cachedData = localStorage.getItem('bis_search_cache');
            if (!cachedData) return false;

            const parsedData = JSON.parse(cachedData);

            // Check if cache is from the same URL
            if (parsedData.url === bisConfig.url) {
                // Check if cache is not too old
                const cacheAge = Date.now() - parsedData.timestamp;
                const maxAge = bisConfig.cacheMaxAge;

                if (cacheAge < maxAge) {
                    bisAllPostsCache = parsedData.posts;
                    bisCacheLoaded = true;
                    return true;
                } else {
                    localStorage.removeItem('bis_search_cache');
                }
            }
        } catch (error) {
            console.error('Error loading cache:', error);
        }
        return false;
    }
    
    // Load all posts for enhanced search (client-side fuzzy search)
    function bisLoadAllPostsForSearch() {
        return new Promise((resolve, reject) => {
            // TRY TO LOAD FROM LOCALSTORAGE FIRST
            if (!bisCacheLoaded) {
                const hasCache = bisLoadCacheFromStorage();
                if (hasCache) {
                    resolve(bisAllPostsCache);
                    return;
                }
            }

            // If cache already loaded, return immediately
            if (bisCacheLoaded) {
                resolve(bisAllPostsCache);
                return;
            }
            // If cache already loaded, return immediately
            if (bisCacheLoaded) {
                resolve(bisAllPostsCache);
                return;
            }

            // If already loading, return the promise
            if (bisCacheLoading) {
                // Wait for loading to complete
                const waitForCache = () => {
                    if (bisCacheLoaded) {
                        resolve(bisAllPostsCache);
                    } else if (bisCacheLoading) {
                        setTimeout(waitForCache, 100);
                    } else {
                        reject(new Error('Cache loading failed'));
                    }
                };
                waitForCache();
                return;
            }

            bisCacheLoading = true;

            // First, check total number of posts
            bisCheckBlogPostCount()
                .then(totalPosts => {

                    if (totalPosts === 0) {
                        bisCacheLoaded = true;
                        bisCacheLoading = false;
                        resolve([]);
                        return;
                    }

                    // Load ALL posts
                    let allPosts = [];
                    let startIndex = 1;
                    const batchSize = bisConfig.batchSize;
                    const maxBatches = Math.ceil(totalPosts / batchSize);
                    let currentBatch = 0;
                    let loadedCount = 0;
                    let consecutiveFailures = 0;
                    const maxConsecutiveFailures = 3;

                    // Show progress indicator
                    showCacheStatus('loading', `Loading posts...`);

                    // Function to load a single batch
                    function loadBatch(startIdx) {
                        return new Promise((resolveBatch, rejectBatch) => {
                            const callbackName = 'bisBatchCallback_' + Date.now() + '_' + startIdx;
                            const script = document.createElement("script");

                            window[callbackName] = function(feedData) {
                                delete window[callbackName];
                                if (script.parentNode) {
                                    document.body.removeChild(script);
                                }
                                consecutiveFailures = 0;
                                resolveBatch(feedData);
                            };

                            script.onerror = function() {
                                delete window[callbackName];
                                if (script.parentNode) {
                                    document.body.removeChild(script);
                                }
                                consecutiveFailures++;
                                rejectBatch(new Error(`Failed to load batch starting at ${startIdx}`));
                            };

                            // FIX: Use current sort order for cache loading
                            const sortOrder = bisIsSortFunctional() ? bisCurrentOrder : bisSettingConfig.custom.defaultSort;
                            const url = `${bisConfig.url}/${bisConfig.feedPath}?alt=${bisConfig.apiFormat}&max-results=${batchSize}&start-index=${startIdx}&orderby=${sortOrder}&callback=${callbackName}`;
                            script.src = url;
                            document.body.appendChild(script);
                        });
                    }

                    // Function to load all batches recursively
                    function loadAllBatches() {
                        if (startIndex > totalPosts) {
                            finishLoading();
                            return;
                        }

                        if (consecutiveFailures >= maxConsecutiveFailures) {
                            console.error(`Too many consecutive failures (${consecutiveFailures}), stopping`);
                            finishLoading();
                            return;
                        }

                        currentBatch++;

                        loadBatch(startIndex)
                            .then(feedData => {
                                try {
                                    if (feedData?.feed?.entry) {
                                        const batchEntries = feedData.feed.entry;
                                        loadedCount += batchEntries.length;

                                        // Update progress
                                        const progressPercent = Math.min(100, Math.round((loadedCount / totalPosts) * 100));
                                        showCacheStatus('loading', `Loading posts... (${progressPercent}%)`);

                                        allPosts = allPosts.concat(batchEntries);

                                        // Calculate next start index
                                        startIndex += batchEntries.length;

                                        // Check if we need to load more
                                        if (loadedCount < totalPosts) {
                                            // Small delay to avoid rate limiting
                                            setTimeout(() => {
                                                loadAllBatches();
                                            }, 200);
                                        } else {
                                            // All posts loaded
                                            finishLoading();
                                        }
                                    } else {

                                        // If we got no entries but should have more, try next batch
                                        if (loadedCount < totalPosts) {
                                            startIndex += batchSize; // Skip this range
                                            setTimeout(() => {
                                                loadAllBatches();
                                            }, 300);
                                        } else {
                                            finishLoading();
                                        }
                                    }
                                } catch (error) {

                                    // Continue with next batch
                                    if (loadedCount < totalPosts) {
                                        startIndex += batchSize; // Skip this range
                                        setTimeout(() => {
                                            loadAllBatches();
                                        }, 500);
                                    } else {
                                        finishLoading();
                                    }
                                }
                            })
                            .catch(error => {
                                console.error(`Failed to load batch ${currentBatch}:`, error);

                                // Try next batch if we haven't loaded all posts
                                if (loadedCount < totalPosts) {
                                    startIndex += batchSize; // Skip this range
                                    setTimeout(() => {
                                        loadAllBatches();
                                    }, 1000); // Longer delay on error
                                } else {
                                    finishLoading();
                                }
                            });
                    }

                    function finishLoading() {
                        bisAllPostsCache = allPosts;
                        bisCacheLoaded = true;
                        bisCacheLoading = false;

                        // SAVE CACHE TO LOCALSTORAGE
                        bisSaveCacheToStorage();

                        if (bisAllPostsCache.length < totalPosts) {
                            console.warn(`Warning: Only loaded ${bisAllPostsCache.length} out of ${totalPosts} posts`);
                        }

                        showCacheStatus('loaded', `Search index ready`);

                        setTimeout(() => {
                            hideCacheStatus();
                        }, 3000);

                        resolve(bisAllPostsCache);
                    }

                    // Start loading all batches
                    loadAllBatches();
                })
                .catch(error => {
                    console.error('Error getting total post count:', error);
                    bisCacheLoading = false;
                    reject(error);
                });
        });
    }
	
    function bisClearSearchCache() {
      	// Cleanup scroll listener when no more posts
        if (bisSettingConfig.custom.loadPostMode === 'auto') {
          bisCleanupScrollListener();
        };
      
        bisDomCache.clear();
      
        bisAllPostsCache = [];
        bisCacheLoaded = false;
        bisCacheLoading = false;
        bisAllLabels = [];
        bisAllLoadedEntries = [];
        bisCurrentFeedData = null;
        bisPostsLoaded = false;
        bisIsLoadingMore = false;
        bisStartIndex = 1;
        bisHasMorePosts = true;
        bisIsSearchMode = false;
        bisLastSearchQuery = "";
        bisUrlParamsProcessed = false;

        // Clear cache from localStorage
        try {
            localStorage.removeItem('bis_search_cache');
        } catch (error) {
            console.error('Error clearing cache storage:', error);
        }
    }
    
    function bisClearPostsCache() {
        bisAllPostsCache = [];
        bisCacheLoaded = false;
        bisCacheLoading = false;
        bisAllLoadedEntries = [];
        bisCurrentFeedData = null;
        bisPostsLoaded = false;
        bisIsLoadingMore = false;
        bisStartIndex = 1;
        bisHasMorePosts = true;
    }
    
    async function bisCheckBlogPostCount() {
        return new Promise((resolve) => {
            const callbackName = 'bisCountCallback_' + Date.now();
            const script = document.createElement("script");

            window[callbackName] = function(feedData) {
                delete window[callbackName];
                if (script.parentNode) {
                    document.body.removeChild(script);
                }

                try {
                    if (feedData?.feed) {
                        const totalResults = parseInt(feedData.feed.openSearch$totalResults?.$t || '0');
                        resolve(totalResults);
                    } else {
                        resolve(0);
                    }
                } catch (error) {
                    console.error('Error checking post count:', error);
                    resolve(0);
                }
            };

            script.onerror = function() {
                delete window[callbackName];
                if (script.parentNode) {
                    document.body.removeChild(script);
                }
                resolve(0);
            };

            // Just get 1 post to check the total count
            const url = `${bisConfig.url}/${bisConfig.feedPath}?alt=${bisConfig.apiFormat}&max-results=1&callback=${callbackName}`;
            script.src = url;
            document.body.appendChild(script);
        });
    }
    
    function loadPostsInBatches(maxPosts, resolve, reject) {
        let allPosts = [];
        let startIndex = 1;
        const batchSize = bisConfig.batchSize;
        const maxBatches = Math.ceil(maxPosts / batchSize);
        let currentBatch = 0;

        function loadNextBatch() {
            if (currentBatch >= maxBatches) {
                finishLoading();
                return;
            }

            currentBatch++;

            // Update progress
            const progressPercent = Math.min(100, Math.round((loadedCount / totalPosts) * 100));
            showCacheStatus('loading', `Loading posts... (${progressPercent}%)`);

            loadBatchWithRetry(startIndex)
                .then(feedData => {
                    try {
                        if (feedData?.feed) {
                            const batchEntries = feedData.feed.entry || [];
                            loadedCount += batchEntries.length;

                            allPosts = allPosts.concat(batchEntries);

                            // Check if we have loaded ALL posts
                            if (loadedCount < totalPosts) {
                                startIndex += batchEntries.length;

                                // Small delay to avoid rate limiting
                                setTimeout(() => {
                                    loadNextBatch();
                                }, 200);
                            } else {
                                // We've loaded all posts
                                finishLoading();
                            }
                        } else {

                            // Even if no data, try next batch if we haven't loaded all posts
                            if (loadedCount < totalPosts && currentBatch < maxBatches) {
                                startIndex += batchSize;
                                setTimeout(() => {
                                    loadNextBatch();
                                }, 300);
                            } else {
                                finishLoading();
                            }
                        }
                    } catch (error) {

                        // Continue with next batch even if this one fails
                        if (loadedCount < totalPosts && currentBatch < maxBatches) {
                            startIndex += batchSize;
                            setTimeout(() => {
                                loadNextBatch();
                            }, 500);
                        } else {
                            finishLoading();
                        }
                    }
                })
                .catch(error => {
                    console.error('Failed to load batch:', error);

                    // Continue with next batch even if this one fails
                    if (loadedCount < totalPosts && currentBatch < maxBatches) {
                        startIndex += batchSize;
                        setTimeout(() => {
                            loadNextBatch();
                        }, 500);
                    } else {
                        finishLoading();
                    }
              	});
        }

        function finishLoading() {
            bisAllPostsCache = allPosts;
            bisCacheLoaded = true;
            bisCacheLoading = false;

            // Show cache status
            const statusDiv = document.querySelector('.bis-cache-status');
            if (statusDiv) {
                statusDiv.innerHTML = `<i class="fas fa-check-circle"></i> Enhanced search ready (${bisAllPostsCache.length} posts)`;
                statusDiv.className = 'bis-cache-status visible loaded';
                setTimeout(() => {
                    statusDiv.classList.remove('visible');
                }, 2000);
            }

            resolve(bisAllPostsCache);
        }

        // Start loading first batch
        loadNextBatch();
    }

    function bisForceReloadCache() {
    
        // Clear existing cache
        bisAllPostsCache = [];
        bisCacheLoaded = false;
        bisCacheLoading = false;

        // Start loading
        bisWarmSearchCache();
    }
    
    function bisEnhanceCachedPosts(posts) {
        return posts.map(post => {
            // Clean post content of zero-width spaces
            const cleanTitle = bisRemoveZeroWidthSpaces(post.title.$t || '');
            const cleanContent = bisRemoveZeroWidthSpaces(post.content?.$t || post.summary?.$t || '');
            const cleanLabels = (post.category || []).map(cat => ({
                ...cat,
                term: bisFormatLabelTerm(bisRemoveZeroWidthSpaces(cat.term))
            }));

            post._searchMeta = {
                titleLower: cleanTitle.toLowerCase(),
                contentLower: cleanContent.toLowerCase(),
                labelsLower: cleanLabels.map(cat => cat.term.toLowerCase()),
                published: new Date(post.published.$t).getTime(),
                contentLength: cleanContent.length,
                hasComments: !!(post.thr$total?.$t && parseInt(post.thr$total.$t) > 0),

                // Store original for display
                originalTitle: post.title.$t,
                originalContent: post.content?.$t || post.summary?.$t || '',
                originalLabels: post.category || [],
            };

            // Also clean the original post object for search
            post.title.$t = cleanTitle;
            if (post.content) post.content.$t = cleanContent;
            if (post.summary) post.summary.$t = cleanContent;
            post.category = cleanLabels;

            return post;
        });
    }
    
    function loadBatchWithRetry(startIndex, retryCount = 0) {
        return new Promise((resolve, reject) => {
            const maxRetries = 2;
            const callbackName = 'bisRetryCallback_' + Date.now() + '_' + startIndex;
            const script = document.createElement("script");

            window[callbackName] = function(feedData) {
                delete window[callbackName];
                if (script.parentNode) {
                    document.body.removeChild(script);
                }
                resolve(feedData);
            };

            script.onerror = function() {
                delete window[callbackName];
                if (script.parentNode) {
                    document.body.removeChild(script);
                }

                if (retryCount < maxRetries) {
                    setTimeout(() => {
                        loadBatchWithRetry(startIndex, retryCount + 1)
                            .then(resolve)
                            .catch(reject);
                    }, 1000 * (retryCount + 1)); // Exponential backoff
                } else {
                    reject(new Error(`Failed to load batch starting at ${startIndex} after ${maxRetries} retries`));
                }
            };

            // Only apply sort if sort is functional
            const sortOrder = bisIsSortFunctional() ? bisCurrentOrder : bisSettingConfig.custom.defaultSort;
            const url = `${bisConfig.url}/${bisConfig.feedPath}?alt=${bisConfig.apiFormat}&max-results=${batchSize}&start-index=${startIndex}&orderby=${sortOrder}&callback=${callbackName}`;
            script.src = url;
            document.body.appendChild(script);
        });
    }
    
	function showCacheStatus(type, message) {
        // Only show cache status to admin users
        //if (!bisIsBlogAdmin()) return;

        let statusDiv = document.querySelector('.bis-cache-status');
        if (!statusDiv) {
            statusDiv = document.createElement('div');
            statusDiv.className = 'bis-cache-status';
            document.body.appendChild(statusDiv);
        }

        statusDiv.className = `bis-cache-status visible ${type}`;
        statusDiv.innerHTML = `<i class="${bisSettingConfig.icons.loading}"></i> ${message}`;
    }

    function hideCacheStatus() {
        const statusDiv = document.querySelector('.bis-cache-status');
        if (statusDiv) {
            statusDiv.classList.remove('visible');
            setTimeout(() => {
                if (statusDiv.parentNode) {
                    statusDiv.parentNode.removeChild(statusDiv);
                }
            }, 300);
        }
    }
    
    // =============================================================================
    // URL PARAMETER HANDLING
    // =============================================================================
    function bisParseUrlParameters() {
        if (!bisIsUrlParamsFunctional()) return {
            search: null,
            label: null,
            view: null,
            sort: null
        };

        const params = {
            search: null,
            label: null,
            view: null,
            sort: null
        };

        try {
            const urlParams = new URLSearchParams(window.location.search);

            // Use configured parameter names from settings
            const paramSearch = bisSettingConfig.custom.urlParamSearch || "q";
            const paramLabel = bisSettingConfig.custom.urlParamLabel || "label";
            const paramView = bisSettingConfig.custom.urlParamView || "view";
            const paramSort = bisSettingConfig.custom.urlParamSort || "orderby";

            // Check ALL parameters using configured names
            // If parameter exists in URL, use it
            // If not, it remains null

            // Search parameter (use configured name, default to "q" for Blogger style)
            if (urlParams.has(paramSearch)) {
                params.search = decodeURIComponent(urlParams.get(paramSearch));
            }
            // Fallback to "q" if configured param doesn't exist but "q" does
            else if (paramSearch !== "q" && urlParams.has("q")) {
                params.search = decodeURIComponent(urlParams.get("q"));
            }
            // Fallback to "search" if configured param doesn't exist but "search" does
            else if (paramSearch !== "search" && urlParams.has("search")) {
                params.search = decodeURIComponent(urlParams.get("search"));
            }

            // Label parameter (use configured name)
            if (urlParams.has(paramLabel)) {
                params.label = decodeURIComponent(urlParams.get(paramLabel));
            }
            // Fallback to "label" if configured param is different
            else if (paramLabel !== "label" && urlParams.has("label")) {
                params.label = decodeURIComponent(urlParams.get("label"));
            }

            // Sort parameter (use configured name)  
            if (urlParams.has(paramSort)) {
                params.sort = decodeURIComponent(urlParams.get(paramSort));
            }
            // Fallback to "sort" if configured param is different
            else if (paramSort !== "sort" && urlParams.has("sort")) {
                params.sort = decodeURIComponent(urlParams.get("sort"));
            }

            // View parameter (use configured name)
            if (urlParams.has(paramView)) {
                params.view = decodeURIComponent(urlParams.get(paramView));
            }
            // Fallback to "view" if configured param is different
            else if (paramView !== "view" && urlParams.has("view")) {
                params.view = decodeURIComponent(urlParams.get("view"));
            }

            // Clean search query
            if (params.search) {
                // Only clean if it's not an exact phrase search
                if (!(params.search.startsWith('"') && params.search.endsWith('"'))) {
                    params.search = bisCleanSearchQuery(params.search);
                }
            }

            return params;
        } catch (error) {
            console.error('Error parsing URL parameters:', error);
            return params;
        }
    }

    function bisApplyUrlParameters(params) {
        if (!bisIsUrlParamsFunctional()) return;

        // EACH PARAMETER IS INDEPENDENT
        // If URL has parameter → use it
        // If URL doesn't have parameter → use default/user preference

        // 1. LABEL: If URL has label, use it. Otherwise keep current/default
        if (bisIsLabelFilterFunctional()) {
            if (params.label !== null) {
                // URL has label parameter → use it
                bisCurrentLabel = params.label;
            }
            // If no label in URL, keep whatever is already set
        }

        // 2. SEARCH: If URL has search, use it
        if (bisIsTextSearchFunctional() && params.search !== null) {
            const searchInput = document.getElementById('bisSearchInput');
            if (searchInput) {
                searchInput.value = params.search;
                bisLastSearchQuery = params.search;
            }
        }

        // 3. VIEW: If URL has view, use it. Otherwise use default/user preference
        if (bisIsLayoutSwitcherFunctional()) {
            if (params.view !== null && ['card', 'list', 'minimal'].includes(params.view)) {
                // URL has view parameter → use it
                bisCurrentView = params.view;
            } else {
                // No view in URL → use user preference or default
                const userPreferences = bisGetUserPreferences();
                bisCurrentView = userPreferences.view;
            }
        }

        // 4. SORT: If URL has sort, use it. Otherwise use default/user preference
        if (bisIsSortFunctional()) {
            if (params.sort !== null && ['published', 'updated', 'relevance'].includes(params.sort)) {
                // URL has sort parameter → use it
                bisCurrentOrder = params.sort;
            } else {
                // No sort in URL → use user preference or default
                const userPreferences = bisGetUserPreferences();
                bisCurrentOrder = userPreferences.sort;
            }

            // Update the dropdown
            const orderSelect = document.getElementById('bisOrderFeedBy');
            if (orderSelect) {
                orderSelect.value = bisCurrentOrder;
            }
        }
    }

    function bisUpdateUrlInBrowser() {
        if (!bisIsUrlParamsFunctional()) return;

        const urlParams = new URLSearchParams();

        // Use configured parameter names from settings
        const paramSearch = bisSettingConfig.custom.urlParamSearch || "q";
        const paramLabel = bisSettingConfig.custom.urlParamLabel || "label";
        const paramView = bisSettingConfig.custom.urlParamView || "view";
        const paramSort = bisSettingConfig.custom.urlParamSort || "orderby";

        // Include search if it exists and is not empty
        if (bisIsTextSearchFunctional() && bisLastSearchQuery && bisLastSearchQuery.trim() !== "") {
            urlParams.set(paramSearch, bisLastSearchQuery);
        }

        // Include label if it exists and is not empty/not "All Categories"
        if (bisIsLabelFilterFunctional() && bisCurrentLabel && bisCurrentLabel !== "") {
            urlParams.set(paramLabel, bisCurrentLabel);
        }

        // Include view if it's different from default
        if (bisIsLayoutSwitcherFunctional() && bisCurrentView) {
            urlParams.set(paramView, bisCurrentView);
        }

        // Include sort if it's different from default
        if (bisIsSortFunctional() && bisCurrentOrder) {
            urlParams.set(paramSort, bisCurrentOrder);
        }

        const newQueryString = urlParams.toString();
        const newUrl = window.location.pathname + (newQueryString ? `?${newQueryString}` : '');

        if (window.history.replaceState) {
            window.history.replaceState(null, '', newUrl);
        }
    }
    
    function bisClearUrlParameters() {
  		if (!bisIsUrlParamsFunctional()) return;
  		if (window.history.replaceState) window.history.replaceState(null, '', window.location.pathname);
  	}
    
    // =============================================================================
    // USER PREFERENCES
    // =============================================================================
    function bisGetUserPreferences() {
  		if (!bisIsFeatureForAdmin(bisSettingConfig.features.savePreferences)) {
  			return {
  				view: bisSettingConfig.custom.defaultView,
  				sort: bisSettingConfig.custom.defaultSort
  			};
  		}

  		if (!bisIsLayoutSwitcherFunctional()) {
  			return {
  				view: bisSettingConfig.custom.defaultView,
  				sort: localStorage.getItem('bisUserSort') || bisSettingConfig.custom.defaultSort
  			};
  		}

  		try {
  			return {
  				view: localStorage.getItem('bisLayout') || bisSettingConfig.custom.defaultView,
  				sort: localStorage.getItem('bisUserSort') || bisSettingConfig.custom.defaultSort
  			};
  		} catch (error) {
  			return {
  				view: bisSettingConfig.custom.defaultView,
  				sort: bisSettingConfig.custom.defaultSort
  			};
  		}
  	}

  	function bisSaveUserPreferences() {
  		if (!bisIsFeatureForAdmin(bisSettingConfig.features.savePreferences)) return;

  		try {
  			if (bisIsLayoutSwitcherFunctional()) {
  				localStorage.setItem('bisLayout', bisCurrentView);
  			}
  			localStorage.setItem('bisUserSort', bisCurrentOrder);
  		} catch (error) {}
  	}
    
    // =============================================================================
    // BLOG URL MANAGEMENT
    // =============================================================================
    async function bisTestBlogUrl(url) {
  		return new Promise((resolve) => {
  			const callbackName = 'bisCallback_' + Math.floor(Math.random() * 100000);

  			window[callbackName] = function(data) {
  				delete window[callbackName];
  				document.body.removeChild(script);
  				resolve(!!data.feed.entry);
  			};

  			const script = document.createElement('script');
  			script.src = `${url}${bisConfig.feedPath}?alt=${bisConfig.apiFormat}&max-results=1&callback=${callbackName}`;
  			script.onerror = function() {
  				delete window[callbackName];
  				document.body.removeChild(script);
  				resolve(false);
  			};

  			document.body.appendChild(script);
  		});
  	}

  	async function bisSetBlogUrl() {
        if (!bisIsblogUrlSelectorFunctional(bisSettingConfig.features.blogUrlSelector)) {
            const button = document.querySelector('.bis-selector-button');
            if (button) {
                button.style.animation = 'none';
                setTimeout(() => {
                    button.style.animation = 'shake 0.5s ease-in-out';
                }, 10);
            }
            return;
        }

        const urlInputElement = document.getElementById('bisBlogUrl');
        if (!urlInputElement) return;

        let urlInput = urlInputElement.value.trim();

      	if (!urlInput) {
            // Empty input means "use current URL"

            // Only clear cache if we were previously on a different blog
            if (bisConfig.url !== window.location.origin) {
                bisClearSearchCache();
            }

            // Switch to current blog URL
            bisConfig.url = window.location.origin;

            // Remove stored URL from localStorage
            localStorage.removeItem('bisSearchUrl');

            // Re-initialize with current URL
            bisInitializeSearch();
            return;
        }

        if (!/^https?:\/\//i.test(urlInput)) {
            urlInput = 'https://' + urlInput;
        }
        urlInput = urlInput.replace(/\/$/, '');

        const feedNav = document.getElementById("bisFeedNav");
        if (feedNav) {
            feedNav.innerHTML = `<div class="bis-loading-state"><i class="${bisSettingConfig.icons.loading}"></i> ${bisSettingConfig.localization.verifyingUrl}</div>`;
        }
        urlInputElement.disabled = true;

        try {
            const isValid = await bisTestBlogUrl(urlInput);
            if (isValid) {
                bisConfig.url = urlInput;
                localStorage.setItem('bisSearchUrl', urlInput);
                // Clear cache before initializing with new URL
                bisClearSearchCache();
                bisInitializeSearch();
            } else {
                bisShowError(bisSettingConfig.localization.invalidBlogUrl);
                urlInputElement.focus();
                bisResetSearchInterface();
            }
        } catch (err) {
            bisShowError(bisSettingConfig.localization.errorCheckingUrl);
            urlInputElement.focus();
            bisResetSearchInterface();
        } finally {
            urlInputElement.disabled = false;
        }
    }

  	function bisResetSearchInterface() {
      	bisDomCache.clear();
        // Clear the cache
        bisClearSearchCache();

        const labelSorter = document.getElementById("bisLabelSorter");
        const feedContainer = document.getElementById("bisFeedContainer");
        const resultDesc = document.getElementById("bisResultDesc");
        const feedNav = document.getElementById("bisFeedNav");
        const orderFeedBy = document.getElementById("bisOrderFeedBy");
        const searchInput = document.getElementById("bisSearchInput");

        if (labelSorter && bisIsFeatureVisible(bisSettingConfig.features.labelFilter)) {
            labelSorter.innerHTML = `<div class="bis-label-search-wrapper">
                           <input type="text" class="bis-label-search-input" placeholder="${bisSettingConfig.localization.searchCategories}" disabled>
                           <div class="bis-label-search-dropdown">
                               <div class="bis-label-search-options">
                                   <div class="bis-label-option" data-value="">${bisSettingConfig.localization.allCategories}</div>
                                   <div class="bis-label-loading">${bisSettingConfig.localization.loading}</div>
                               </div>
                           </div>
                       </div>`;
        }
        if (feedContainer) feedContainer.innerHTML = '';
        if (resultDesc) resultDesc.innerHTML = '';
        if (feedNav) feedNav.innerHTML = `<div class="bis-loading-state">${bisSettingConfig.localization.enterValidUrl}</div>`;
        if (orderFeedBy && bisIsFeatureVisible(bisSettingConfig.features.sort)) {
            orderFeedBy.disabled = !bisIsSortFunctional();
        }
        if (searchInput && bisIsFeatureVisible(bisSettingConfig.features.textSearch)) {
            searchInput.disabled = !bisIsTextSearchFunctional();
        }

        bisCurrentFeedData = null;
        bisPostsLoaded = false;
        bisIsLoadingMore = false;
        bisAllLoadedEntries = [];
    }
    
    // =============================================================================
    // SEARCH MODE RATIO
    // =============================================================================
    function bisIsSearchStrategyVisible() {
        // Search ratio is visible if enhancedSearch feature is function
        return bisIsFeatureFunctional(bisSettingConfig.features.enhancedSearch);
    }
    
    function bisGetSearchModeToUse() {
        // If enhanced search is functional, use the selected strategy
        if (bisIsSearchStrategyVisible()) {
            return bisGetSelectedSearchStrategy();
        }

        // If enhanced search is not functional, use the default setting
        return bisSettingConfig.custom.searchMode;
    }

    function bisChangeSearchStrategy(option) {
        if (!bisIsSearchStrategyVisible()) {
            return;
        }

        // Update the selected option
        bisSaveSearchStrategy(option);

        // Get current search query
        const searchInput = document.getElementById('bisSearchInput');
        const currentQuery = searchInput ? searchInput.value.trim() : '';

        // If there's an active search query, re-execute the search with new strategy
        if (currentQuery && currentQuery.length > 0) {
            // Show loading state
            const feedContainer = document.getElementById("bisFeedContainer");
            const resultDesc = document.getElementById("bisResultDesc");
            const feedNav = document.getElementById("bisFeedNav");

            if (feedContainer) feedContainer.innerHTML = '';
            if (resultDesc) resultDesc.innerHTML = '';
            if (feedNav) {
                feedNav.innerHTML = `<div class="bis-loading-state"><i class="${bisSettingConfig.icons.search}"></i> Updating search with ${option} strategy...</div>`;
            }

            // Reset search state
            bisIsSearchMode = false;
            bisLastSearchQuery = currentQuery;

            // Update URL parameters
            bisUpdateUrlInBrowser();

            // Clear current results
            bisAllLoadedEntries = [];
            bisCurrentFeedData = null;
            bisPostsLoaded = true;
            bisIsLoadingMore = false;

            // Execute search based on new strategy
            setTimeout(() => {
                const searchMode = option; // Use the selected option

                if (searchMode === "blogger-only") {
                    performBloggerSearch(currentQuery);
                } 
                else if (searchMode === "enhanced-only") {
                    if (bisIsEnhancedSearchFunctional()) {
                        performEnhancedSearch(currentQuery);
                    } else {
                        // Fallback to Blogger if enhanced not available
                        performBloggerSearch(currentQuery);
                    }
                }
                else if (searchMode === "blogger-first") {
                    performBloggerSearch(currentQuery);
                }
                else if (searchMode === "enhanced-first") {
                    if (bisIsEnhancedSearchFunctional()) {
                        performEnhancedSearch(currentQuery);
                    } else {
                        performBloggerSearch(currentQuery);
                    }
                }
                else { // "auto" mode - SMART selection
                    if (shouldUseEnhancedSearch(currentQuery)) {
                        if (bisIsEnhancedSearchFunctional()) {
                            performEnhancedSearch(currentQuery);
                        } else {
                            performBloggerSearch(currentQuery);
                        }
                    } else {
                        performBloggerSearch(currentQuery);
                    }
                }
            }, 100);
        } else {
            // If no active search, just update the dropdown
        }
    }

    function bisGetSelectedSearchStrategy() {
        // If enhanced search is not functional, return the default
        if (!bisIsSearchStrategyVisible()) {
            return bisSettingConfig.custom.searchMode;
        }

        // Try to get from localStorage if savePreferences is enabled
        if (bisIsFeatureForAdmin(bisSettingConfig.features.savePreferences)) {
            try {
                const saved = localStorage.getItem('bisSelectedRatio');
                if (saved) {
                    return saved;
                }
            } catch (error) {
                console.error('Error loading saved ratio:', error);
            }
        }

        // Default to blogger-first
        return "auto";
    }

    function bisSaveSearchStrategy(option) {
        // Only save if buttons are visible and savePreferences is enabled
        if (!bisIsSearchStrategyVisible() || !bisIsFeatureForAdmin(bisSettingConfig.features.savePreferences)) {
            return;
        }

        try {
            localStorage.setItem('bisSelectedRatio', option);
        } catch (error) {
            console.error('Error saving search strategy:', error);
        }
    }
    
    function bisUpdateSearchStrategyDropdown() {
        if (!bisIsSearchStrategyVisible()) return;

        const dropdown = document.getElementById('bisSearchStrategy');
        if (!dropdown) return;

        const selectedOption = bisGetSelectedSearchStrategy();
        dropdown.value = selectedOption;
    }
    
    // Search mode
    function bisIsSearchModeAuto() {
        return bisSettingConfig.custom.searchMode === "auto";
    }

    function bisIsSearchModeBloggerFirst() {
        return bisSettingConfig.custom.searchMode === "blogger-first";
    }

    function bisIsSearchModeEnhancedFirst() {
        return bisSettingConfig.custom.searchMode === "enhanced-first";
    }

    function bisIsSearchModeBloggerOnly() {
        return bisSettingConfig.custom.searchMode === "blogger-only";
    }

    function bisIsSearchModeEnhancedOnly() {
        return bisSettingConfig.custom.searchMode === "enhanced-only";
    }
    
    // =============================================================================
    // SEARCH FUNCTIONALITY
    // =============================================================================
    function bisSearchPost() {
      	// Cleanup scroll listener when no more posts
        if (bisSettingConfig.custom.loadPostMode === 'auto') {
          bisCleanupScrollListener();
        };
      
        return bisEnhancedSearch();
    }
    
    // Reset attempts counter
    function bisResetSearchAttempts() {
        bisSearchAttempts = 0;
    }
    
    // Sort result for enhance search
    function bisSortEnhancedResults(results, sortOrder) {
        if (!results || results.length === 0) return results;

        // If sorting by relevance, keep the order from fuzzy search
        if (sortOrder === 'relevance') {
            return results; // Already sorted by relevance score
        }

        const now = new Date();

        return results.sort((a, b) => {
            const dateA = new Date(a.published.$t);
            const dateB = new Date(b.published.$t);

            if (sortOrder === 'published') {
                // Newest published first
                return dateB.getTime() - dateA.getTime();
            } else if (sortOrder === 'updated') {
                // Try to get updated date, fallback to published
                const updatedA = a.updated ? new Date(a.updated.$t) : dateA;
                const updatedB = b.updated ? new Date(b.updated.$t) : dateB;
                return updatedB.getTime() - updatedA.getTime();
            }

            return 0;
        });
    }
    
    // Enhanced fuzzy search with operator support
    function bisSmartFuzzySearch(posts, query) {
        if (!query || query.trim() === '' || query.length < 1) {
            return [];
        }

        // Clean the query first
        const cleanQuery = bisCleanSearchQuery(query);
        if (!cleanQuery || cleanQuery.trim() === '' || cleanQuery.length < 1) {
            return [];
        }

        const searchTerm = cleanQuery.toLowerCase().trim();
        const results = [];
        const maxResults = bisSettingConfig.content.maxSearchResults; // Return more results for better matching

        // FIX: Add + operator parsing
        const operators = {
            exact: searchTerm.match(/"([^"]+)"/g)?.map(m => m.replace(/"/g, '').toLowerCase()) || [],
            not: searchTerm.match(/-([^\s]+)/g)?.map(m => m.substring(1).toLowerCase()) || [],
            // NEW: + operator for required terms
            required: searchTerm.match(/\+([^\s]+)/g)?.map(m => m.substring(1).toLowerCase()) || [],
            or: searchTerm.match(/\|/g) ? searchTerm.split('|').map(p => p.trim().toLowerCase()) : null
        };

        // Clean the search term (remove operators)
        let cleanSearchTerm = searchTerm
            .replace(/"[^"]+"/g, '') // Remove exact phrases
            .replace(/-\S+/g, '')    // Remove NOT terms
            .replace(/\+\S+/g, '')   // NEW: Remove required terms (+ operator)
            .replace(/\|/g, ' ')     // Replace OR with space
            .trim();

        // Split into words
        const searchWords = cleanSearchTerm.split(/\s+/).filter(w => w.length > 0);

        for (let i = 0; i < posts.length && results.length < maxResults * 3; i++) {
            const post = posts[i];
            let score = 0;

            // Use cleaned content from metadata or clean on the fly
            const title = post._searchMeta?.titleLower || 
                          bisRemoveZeroWidthSpaces(post.title.$t || '').toLowerCase();
            const content = post._searchMeta?.contentLower || 
                           bisRemoveZeroWidthSpaces(post.content?.$t || post.summary?.$t || '').toLowerCase();
            const labels = post._searchMeta?.labelsLower || 
                          (post.category || []).map(cat => 
                              bisRemoveZeroWidthSpaces(cat.term).toLowerCase()
                          );
          
            const postId = post.id.$t.split(".post-")[1] || '';

            // 1. Exact ID match
            if (postId === cleanSearchTerm) {
                score += 500;
            }

            // 2. Check for exact phrase matches
            if (operators.exact.length > 0) {
                let exactMatch = true;
                for (const phrase of operators.exact) {
                    if (!title.includes(phrase) && !content.includes(phrase)) {
                        exactMatch = false;
                        break;
                    }
                }
                if (exactMatch) {
                    score += 300;
                } else {
                    continue; // Skip if exact phrase not found
                }
            }

            // NEW: 3. Check for required terms (+ operator)
            if (operators.required.length > 0) {
                let hasAllRequired = true;
                for (const requiredTerm of operators.required) {
                    if (!title.includes(requiredTerm) && !content.includes(requiredTerm)) {
                        hasAllRequired = false;
                        break;
                    }
                }
                if (!hasAllRequired) {
                    continue; // Skip if missing any required term
                }
                // Bonus for having all required terms
                score += operators.required.length * 50;
            }

            // 4. Check for NOT operators
            if (operators.not.length > 0) {
                let shouldExclude = false;
                for (const notTerm of operators.not) {
                    if (title.includes(notTerm) || content.includes(notTerm)) {
                        shouldExclude = true;
                        break;
                    }
                }
                if (shouldExclude) {
                    continue; // Skip this post
                }
            }

            // 5. Content contains full search term
            else if (content.includes(cleanSearchTerm)) {
                score += 180;
            }

            // 6. Title contains all search words
            else if (searchWords.length > 0) {
                let allWordsInTitle = true;
                let wordMatches = 0;

                for (const word of searchWords) {
                    if (word.length > 1) {
                        if (title.includes(word)) {
                            wordMatches++;
                        } else {
                            allWordsInTitle = false;
                        }
                    }
                }

                if (allWordsInTitle && searchWords.length > 0) {
                    score += 150;
                } else if (wordMatches > 0) {
                    score += wordMatches * 30;
                }
            }

            // 7. Check OR operator
            if (operators.or && operators.or.length > 0) {
                let orMatch = false;
                for (const orTerm of operators.or) {
                    if (orTerm && (title.includes(orTerm) || content.includes(orTerm))) {
                        orMatch = true;
                        break;
                    }
                }
                if (orMatch) {
                    score += 100;
                }
            }

            // 8. Label matches
            for (const label of labels) {
                for (const word of searchWords) {
                    if (word.length > 2 && label.includes(word)) {
                        score += 40;
                    }
                }
            }

            // 9. Check OR operator
            if (operators.or && operators.or.length > 0) {
                let orMatch = false;
                for (const orTerm of operators.or) {
                    if (orTerm && (title.includes(orTerm) || content.includes(orTerm))) {
                        orMatch = true;
                        break;
                    }
                }
                if (orMatch) {
                    score += 100;
                }
            }

            if (score > 0) {
                // Add relevance factor based on date (newer posts get small bonus)
                const postDate = new Date(post.published.$t);
                const daysOld = (Date.now() - postDate.getTime()) / (1000 * 60 * 60 * 24);
                if (daysOld < 30) {
                    score += 10; // New posts get small bonus
                } else if (daysOld > 365) {
                    score -= 5; // Very old posts get small penalty
                }

                results.push({ post, score });
            }
        }

        // Sort by score and return top results
        results.sort((a, b) => b.score - a.score);
        return results.slice(0, maxResults).map(r => r.post);
    }
    
    // Perform Blogger native search first
	function performBloggerSearch(searchQuery) {
        // Increment attempt counter
    	bisSearchAttempts++;
      
        // Check if we've reached max attempts
        if (bisSearchAttempts > MAX_SEARCH_ATTEMPTS) {
            showNoResultsWithFallback();
            return;
        }

        const labelInput = document.querySelector('.bis-label-search-input');
        let searchLabel = "";

        // Apply label filter if available
        if (bisIsLabelFilterFunctional() && bisCurrentLabel && bisCurrentLabel !== "") {
            searchLabel = `label:"${encodeURIComponent(bisCurrentLabel)}"`;
        }

        const script = document.createElement("script");
        const callbackName = 'bisSearchCallback_' + Date.now();

        window[callbackName] = function(feedData) {
            delete window[callbackName];
            if (script.parentNode) {
                document.body.removeChild(script);
            }
            handleBloggerSearchResults(feedData, searchQuery);
        };

        script.onerror = function() {
            console.error('Blogger search failed');
            delete window[callbackName];
            if (script.parentNode) {
                document.body.removeChild(script);
            }

            // Get current search mode
            const searchMode = bisGetSearchModeToUse();

            if (searchMode === "blogger-only") {
                showNoResultsWithFallback();
            } else {
                // Try enhanced search for other modes
                if (bisIsEnhancedSearchFunctional()) {
                    performEnhancedSearch(searchQuery);
                } else {
                    showNoResultsWithFallback();
                }
            }
        };

        // Build search URL
        let searchUrl;
        let encodedQuery = encodeURIComponent(searchQuery);

        // Add wildcard for better matching
        if (searchQuery.length >= 2 && !searchQuery.includes('*') && !searchQuery.includes('"')) {
            encodedQuery = encodeURIComponent(searchQuery + '*');
        }

        // Use current sort order
        const sortOrder = bisIsSortFunctional() ? bisCurrentOrder : bisSettingConfig.custom.defaultSort;

        // Blogger API needs 'relevance' parameter for search
        const bloggerSortOrder = (sortOrder === 'relevance' && searchQuery) ? 'relevance' : sortOrder;

        if (searchLabel && bisIsLabelFilterFunctional()) {
            searchUrl = `${bisConfig.url}/${bisConfig.feedPath}?alt=${bisConfig.apiFormat}&orderby=${bloggerSortOrder}&q=${searchLabel}+${encodedQuery}&max-results=${bisSettingConfig.content.maxSearchResults}&callback=${callbackName}`;
        } else {
            searchUrl = `${bisConfig.url}/${bisConfig.feedPath}?alt=${bisConfig.apiFormat}&orderby=${bloggerSortOrder}&q=${encodedQuery}&max-results=${bisSettingConfig.content.maxSearchResults}&callback=${callbackName}`;
        }
        
        script.src = searchUrl;
        document.body.appendChild(script);
    }
    
    // Perform enhanced client-side search
    function performEnhancedSearch(searchQuery) {
      	// Check if we've reached max attempts
        if (bisSearchAttempts > MAX_SEARCH_ATTEMPTS) {
            showNoResultsWithFallback();
            return;
        }

        // Check if enhanced search is enabled for this user
        if (!bisIsEnhancedSearchFunctional()) {
            performBloggerSearch(searchQuery);
            return;
        }

        const feedNav = document.getElementById("bisFeedNav");
        if (feedNav) {
            feedNav.innerHTML = `<div class="bis-loading-state"><i class="${bisSettingConfig.icons.search}"></i> Searching with enhanced...</div>`;
        }

        // If cache is not loaded yet, try to search with what we have
        if (!bisCacheLoaded || bisAllPostsCache.length === 0) {
            // Use posts from current feed if available
            const availablePosts = bisAllLoadedEntries.length > 0 ? 
                bisAllLoadedEntries : 
                (bisCurrentFeedData?.feed?.entry || []);

            if (availablePosts.length > 0) {
                const results = bisSmartFuzzySearch(availablePosts, searchQuery);
                const sortedResults = bisSortEnhancedResults(results, bisCurrentOrder);

                if (sortedResults.length > 0) {
                    bisShowSearchResults(sortedResults, searchQuery, 'enhanced');
                    return;
                }
            }

            // If no results, load cache
            if (feedNav) {
                feedNav.innerHTML = `<div class="bis-loading-state"><i class="${bisSettingConfig.icons.search}"></i> Loading search index...</div>`;
            }

            // Load cache and then search
            bisLoadAllPostsForSearch()
                .then(allPosts => {
                    executeSmartSearch(allPosts, searchQuery);
                })
                .catch(error => {
                    console.error('Failed to load posts for search:', error);
                    // Fallback to Blogger search
                    performBloggerSearch(searchQuery);
                });
        } else {
            // Cache is loaded, search immediately
            executeSmartSearch(bisAllPostsCache, searchQuery);
        }
    }
    
    // Execute smart search on cached posts
	function executeSmartSearch(allPosts, searchQuery) {
        // Filter posts by current label if applicable
        let filteredPosts = allPosts;

        if (bisIsLabelFilterFunctional() && bisCurrentLabel && bisCurrentLabel !== "") {
            filteredPosts = allPosts.filter(post => {
                const labels = post.category || [];
                return labels.some(label => label.term === bisCurrentLabel);
            });
        }

        // Perform smart fuzzy search
        let results = bisSmartFuzzySearch(filteredPosts, searchQuery);

        // Apply current sort order
        results = bisSortEnhancedResults(results, bisCurrentOrder);

        if (results.length > 0) {
            bisShowSearchResults(results, searchQuery, 'enhanced');
        } else {
            const searchMode = bisGetSearchModeToUse();
            if (searchMode !== "enhanced-only") {
              performBloggerSearch(searchQuery);
            } else {
              showNoResultsWithFallback();
            }
        }
    }
    
    // Show no results with helpful message
    function showNoResultsWithFallback() {
      	// Cleanup scroll listener when no more posts
        if (bisSettingConfig.custom.loadPostMode === 'auto') {
          bisCleanupScrollListener();
        };
      
        // Reset attempts counter
        bisResetSearchAttempts();
      
        const feedContainer = document.getElementById("bisFeedContainer");
        const resultDesc = document.getElementById("bisResultDesc");
        const feedNav = document.getElementById("bisFeedNav");

        if (feedContainer) {
            feedContainer.innerHTML = `
                <div class="bis-empty-state">
                    <i class="${bisSettingConfig.icons.search}"></i>
                    <h3>${bisSettingConfig.localization.noResults}</h3>
                    <p>${bisSettingConfig.localization.adjustSearchCriteria}</p>
                </div>
            `;
        }

        if (resultDesc) resultDesc.innerHTML = bisSettingConfig.localization.noResults;
        if (feedNav) {
            feedNav.innerHTML = `<button onclick="bisResetAndRetry()" class="bis-nav-button front"><i class="${bisSettingConfig.icons.reload}"></i> ${bisSettingConfig.localization.tryAgain}</button>`;
        }

        // Clear current feed data
        bisCurrentFeedData = null;

        bisIsSearchMode = false;
        bisIsLoadingMore = false;
        bisEnableSearchInput();
    }
    
    // Enhanced search function that tries multiple approaches
    function bisEnhancedSearch() {
        // Reset attempts for new search
    	bisResetSearchAttempts();

        // Get the search mode to use
        const searchMode = bisGetSearchModeToUse();

        // Get search query
        const searchInput = document.getElementById('bisSearchInput');
        if (!searchInput) return false;

        const searchQuery = bisCleanSearchQuery(searchInput.value.trim());
        if (!searchQuery) {
            // Handle empty search
            searchInput.value = "";
            bisLastSearchQuery = "";
            bisIsSearchMode = false;
            bisHandleSearchInputChange();
            bisUpdateUrlInBrowser();

            // Reset search state and load posts
            bisPostsLoaded = false;
            bisIsLoadingMore = false;
            bisAllLoadedEntries = [];
            bisStartIndex = 1;
            bisLoadPosts();
            return false;
        }

        // If query is the same as last search and we're already in search mode
        if (searchQuery === bisLastSearchQuery && bisIsSearchMode) {
            return false;
        }

        bisLastSearchQuery = searchQuery;
        bisIsSearchMode = true;
        bisUpdateUrlInBrowser();

        const feedContainer = document.getElementById("bisFeedContainer");
        const resultDesc = document.getElementById("bisResultDesc");
        const feedNav = document.getElementById("bisFeedNav");

        if (feedContainer) feedContainer.innerHTML = "";
        if (resultDesc) resultDesc.innerHTML = "";

        // Show loading message
        if (feedNav) {
            feedNav.innerHTML = `<div class="bis-loading-state"><i class="${bisSettingConfig.icons.search}"></i> ${bisSettingConfig.localization.searching}</div>`;
        }

        bisPostsLoaded = true;
        bisIsLoadingMore = false;
        bisAllLoadedEntries = [];

        // Execute based on search mode
        if (searchMode === "blogger-only") {
            performBloggerSearch(searchQuery);
        } 
        else if (searchMode === "enhanced-only") {
            if (bisIsEnhancedSearchFunctional()) {
                performEnhancedSearch(searchQuery);
            } else {
                // Fallback to Blogger if enhanced not available
                performBloggerSearch(searchQuery);
            }
        }
        else if (searchMode === "blogger-first") {
            performBloggerSearch(searchQuery);
        }
        else if (searchMode === "enhanced-first") {
            if (bisIsEnhancedSearchFunctional()) {
                performEnhancedSearch(searchQuery);
            } else {
                performBloggerSearch(searchQuery);
            }
        }
        else { // "auto" mode - SMART selection
            // Check query type to decide
            if (shouldUseEnhancedSearch(searchQuery)) {
                if (bisIsEnhancedSearchFunctional()) {
                    performEnhancedSearch(searchQuery);
                } else {
                    performBloggerSearch(searchQuery);
                }
            } else {
                performBloggerSearch(searchQuery);
            }
        }

        return false;
    }
    
    // Smart detection for when to use Enhanced search
    function shouldUseEnhancedSearch(searchQuery) {
        // Clean the query
        const query = searchQuery.toLowerCase().trim();
        const queryLength = query.length;
        const words = query.split(/\s+/).filter(w => w.length > 0);
        const wordCount = words.length;

        // Enhanced search is better for:

        // 1. Very short queries (1-3 characters) - Enhanced fuzzy search
        if (queryLength <= 3) {
            return true;
        }

        // 2. Complex queries with search operators
        if (query.includes('"') || query.includes('+') || query.includes('-') || 
            query.includes('|')) {
            return true;
        }

        // 3. Long queries (4+ words or 20+ characters)
        if (wordCount >= 4 || queryLength >= 20) {
            return true;
        }

        // 4. Single word queries that are short (4-10 chars) - Blogger is usually better
        if (wordCount === 1 && queryLength >= 4 && queryLength <= 10) {
            return false; // Blogger handles single keywords well
        }

        // 5. If cache is loaded and we have enough posts, use Enhanced
        if (bisCacheLoaded && bisAllPostsCache.length > 100) {
            return true;
        }

        // 6. Default: Use Blogger for simple 1-2 word queries
        return false;
    }
    
    //=============================================================================
    // SCROLL MANAGEMENT
    // =============================================================================
    function bisThrottle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    function bisSetupScrollListener() {
        // Remove old listener if exists
        if (bisScrollHandler) {
            window.removeEventListener('scroll', bisScrollHandler);
        }

        // Create throttled scroll handler using your bisThrottle function
        bisScrollHandler = bisThrottle(() => {
            // Only auto-load if:
            // 1. Not in search mode
            // 2. Has more posts
            // 3. Not currently loading
            // 4. Feature is functional
            if (!bisIsSearchMode && bisHasMorePosts && !bisIsLoadingMore && 
                bisIsFeatureFunctional(bisSettingConfig.content.loadMore)) {

                const feedNav = bisDomCache.get("bisFeedNav");
                if (!feedNav) return;

                // Get position of load more button
                const navRect = feedNav.getBoundingClientRect();

                // Load more when button is 500px from viewport bottom
                if (navRect.top < (window.innerHeight + 500)) {
                    bisLoadMorePosts();
                }
            }
        }, 250); // Check every 250ms at most

        // Add listener with passive for better performance
        window.addEventListener('scroll', bisScrollHandler, { passive: true });
    }
    
    function bisCleanupScrollListener() {
        if (bisScrollHandler) {
            window.removeEventListener('scroll', bisScrollHandler);
            bisScrollHandler = null;
        }
    }
    
    // =============================================================================
    // LABEL/DROPDOWN MANAGEMENT
    // =============================================================================
    function bisInitializeLabelSearch() {
        const container = bisDomCache.query('.bis-label-search-container');
        if (!container) return;

        const input = container.querySelector('.bis-label-search-input');
        const dropdown = container.querySelector('.bis-label-search-dropdown');
        const options = container.querySelector('.bis-label-search-options');

        if (!input || !dropdown || !options) return;

        // Enable input if label filter is functional
        if (bisIsLabelFilterFunctional()) {
            input.disabled = false;
        } else {
            input.disabled = true;
            return;
        }
      
        // Set initial highlighting based on current label
        const currentLabel = bisCurrentLabel || "";
        bisUpdateLabelHighlight(currentLabel);

        // Simple focus to show dropdown
        input.addEventListener('focus', function() {
            dropdown.style.display = 'block';
          	if (currentLabel === '' && this.value == '') {
            	bisFilterLabelOptions(this.value); // Filter with current value
            }
        });

        // Simple filtering on input
        input.addEventListener('input', function() {
            const value = this.value.trim();

            if (value === '') {
                // If user clears the input completely, update highlight to "All Categories"
                bisUpdateLabelHighlight("");

                // Then call the function to update state
                setTimeout(() => {
                    bisChangeLabelFilter("");
                }, 50);
            } else {
                // If user is typing, show dropdown with filtered options
                bisFilterLabelOptions(value);
                dropdown.style.display = 'block';
            }
        });

        // Click outside to close
        document.addEventListener('click', function(e) {
            if (!container.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });

        // SIMPLE CLICK HANDLER
        options.addEventListener('click', function(e) {
            const option = e.target.closest('.bis-label-option');
            if (option) {
                const value = option.getAttribute('data-value');
                bisChangeLabelFilter(value);
            }
        });
    }

    function bisFilterLabelOptions(searchTerm) {
      if (!bisIsFeatureFunctional(bisSettingConfig.features.labelTextFilter)) return;
      
      const container = bisDomCache.query('.bis-label-search-container');
      if (!container) return;

      const options = container.querySelector('.bis-label-search-options');
      const allOptions = options.querySelectorAll('.bis-label-option, .bis-label-group-header');
      const searchLower = searchTerm.toLowerCase();

      let hasVisibleOptions = false;
      let currentGroupHeader = null;
      let groupHasVisibleItems = false;
      
      allOptions.forEach(option => {
              if (option.classList.contains('bis-label-group-header')) {
                  // Process previous group
                  if (currentGroupHeader && !groupHasVisibleItems) {
                      currentGroupHeader.classList.add('hidden');
                  }

                  // Start new group
                  currentGroupHeader = option;
                  groupHasVisibleItems = false;

                  // Show header initially, will be hidden later if no visible items
                  option.classList.remove('hidden');
              } 
              else if (option.classList.contains('bis-label-option')) {
                  const text = option.textContent.toLowerCase();
                  if (text.includes(searchLower)) {
                      option.classList.remove('hidden');
                      hasVisibleOptions = true;
                      groupHasVisibleItems = true;

                      // Ensure the current group header is visible
                      if (currentGroupHeader) {
                          currentGroupHeader.classList.remove('hidden');
                      }
                  } else {
                      option.classList.add('hidden');
                  }
              }
          });
	  
      // Process the last group
      if (currentGroupHeader && !groupHasVisibleItems) {
          currentGroupHeader.classList.add('hidden');
      }

      // Show/hide no results message
      let noResults = options.querySelector('.bis-label-no-results');
      
      if (!hasVisibleOptions && searchTerm) {
        if (!noResults) {
          noResults = document.createElement('div');
          noResults.className = 'bis-label-no-results';
          noResults.textContent = `${bisSettingConfig.localization.noCategoriesFound}`;
          // Insert at the top (after "All Categories" option)
          const allCategoriesOption = options.querySelector('.bis-label-option[data-value=""]');
          if (allCategoriesOption) {
            options.insertBefore(noResults, allCategoriesOption.nextSibling);
          } else {
            options.prepend(noResults);
          }
        }
        noResults.classList.remove('hidden');
      } else if (noResults) {
        noResults.classList.add('hidden');
      }
	}
    
  	function bisPopulateLabelSearch(labels) {
  		const container = document.querySelector('.bis-label-search-container');
  		if (!container) return;

  		const options = container.querySelector('.bis-label-search-options');
  		const loading = container.querySelector('.bis-label-loading');

  		if (loading) {
  			loading.remove();
  		}

  		// Clear existing options except "All Categories"
  		const allCategoriesOption = options.querySelector('.bis-label-option[data-value=""]');
  		options.innerHTML = '';
  		if (allCategoriesOption) {
  			options.appendChild(allCategoriesOption);
  		}

  		// Store all labels for search functionality
  		bisAllLabels = labels;

  		// Apply category organization (popularTopics and organizedGroups)
  		const organizedLabels = bisOrganizeLabels(labels);

  		// Add organized label options
  		organizedLabels.forEach(labelGroup => {
  			if (labelGroup.isGroup) {
  				// Add group header
  				const groupHeader = document.createElement('div');
  				groupHeader.className = 'bis-label-group-header';
  				groupHeader.textContent = labelGroup.name;
  				options.appendChild(groupHeader);

  				// Add group options
  				labelGroup.options.forEach(option => {
  					const labelOption = document.createElement('div');
  					labelOption.className = 'bis-label-option';
  					labelOption.setAttribute('data-value', option.term);
  					labelOption.textContent = option.displayText;
  					options.appendChild(labelOption);
  				});
  			} else {
  				// Add regular option
  				const labelOption = document.createElement('div');
  				labelOption.className = 'bis-label-option';
  				labelOption.setAttribute('data-value', labelGroup.term);
  				labelOption.textContent = labelGroup.displayText;
  				options.appendChild(labelOption);
  			}
  		});

  		// Initialize search functionality
  		bisInitializeLabelSearch();

  		// Apply URL parameters if any - This needs to happen after labels are populated
  		const urlParams = bisParseUrlParameters();

  		if (urlParams.label && bisIsLabelFilterFunctional()) {
  			const matchingOption = Array.from(options.querySelectorAll('.bis-label-option'))
  				.find(opt => opt.getAttribute('data-value') === urlParams.label);

  			if (matchingOption) {
  				const input = container.querySelector('.bis-label-search-input');
  				input.value = matchingOption.textContent;
  				bisCurrentLabel = urlParams.label;
  			} else {}
  		}

  		// Apply search parameter after a short delay to ensure everything is loaded
  		if (urlParams.search && bisIsTextSearchFunctional()) {
  			setTimeout(() => {
  				const searchInput = document.getElementById('bisSearchInput');
  				if (searchInput) {
  					searchInput.value = urlParams.search;
  					bisLastSearchQuery = urlParams.search;
  					bisHandleSearchInputChange();

  					// If we have both label and search, trigger search
  					if (urlParams.label && bisCurrentLabel !== "") {
  						setTimeout(() => {
  							bisSearchPost();
  						}, 200);
  					}
  				}
  			}, 100);
  		}
  	}
    
    function bisFormatLabelTerm(term) {
        if (!term || typeof term !== 'string') return term || '';

        // Clean zero-width spaces
        const cleanTerm = bisRemoveZeroWidthSpaces(term);

        let processedTerm = cleanTerm;

        // Remove hash prefix if present (optional)
        if (cleanTerm.startsWith('#')) {
            processedTerm = cleanTerm.substring(1);
        }

        // Rule 1: Check for "prefix:" pattern (with or without space after colon)
        const colonPattern = /^[a-zA-Z0-9]+:\s*(.+)$/;
        const colonMatch = processedTerm.match(colonPattern);

        if (colonMatch) {
            return colonMatch[1].trim();
        }

        // Rule 2: Check for "prefix_" pattern
        const underscorePattern = /^[a-zA-Z0-9]+_(.+)$/;
        const underscoreMatch = processedTerm.match(underscorePattern);

        if (underscoreMatch) {
            const remaining = underscoreMatch[1];
            // Replace any underscores in remaining text with spaces
            return remaining.replace(/_/g, ' ').trim();
        }

        // Rule 3: No prefix pattern found - return as-is (hash already removed if present)
        return processedTerm.trim();
    }

  	// Organize labels based on categoryGroups configuration
  	function bisOrganizeLabels(labels) {
        const organizedLabels = [];
        const usedLabels = new Set();
        const popularTopics = bisSettingConfig.categoryGroups.popularTopics || [];
        const organizedGroups = bisSettingConfig.categoryGroups.organizedGroups || {};
        const showSetting = bisSettingConfig.categoryGroups.showUncategorized || "enable";
        const uncategorizedLabel = bisSettingConfig.categoryGroups.uncategorizedLabel || "Other Categories";

        // 1. Add Popular Topics first
        if (popularTopics.length > 0) {
            const popularGroup = {
                isGroup: true,
                name: `${bisSettingConfig.categoryGroups.popularLabel}`,
                options: []
            };

            popularTopics.forEach(topic => {
                const matchingLabels = labels.filter(label => {
                    const formattedText = bisFormatLabelTerm(label.term);
                    return formattedText.toLowerCase().includes(topic.toLowerCase()) ||
                           label.term.toLowerCase().includes(topic.toLowerCase());
                });

                matchingLabels.forEach(label => {
                    if (!usedLabels.has(label.term)) {
                        popularGroup.options.push(label);
                        usedLabels.add(label.term);
                    }
                });
            });

            if (popularGroup.options.length > 0) {
                organizedLabels.push(popularGroup);
            }
        }

        // 2. Add Organized Groups
        Object.entries(organizedGroups).forEach(([identifier, groupName]) => {
            const group = {
                isGroup: true,
                name: groupName,
                options: []
            };

            const identifierLower = identifier.toLowerCase().trim();

            const matchingLabels = labels.filter(label => {
                const labelPrefix = bisFormatLabelTerm(label.term);
                return labelPrefix && labelPrefix.toLowerCase() === identifierLower;
            });

            matchingLabels.forEach(label => {
                if (!usedLabels.has(label.term)) {
                    group.options.push(label);
                    usedLabels.add(label.term);
                }
            });

            if (group.options.length > 0) {
                organizedLabels.push(group);
            }
        });

        // 3. Handle remaining labels with permission check
        const remainingLabels = labels.filter(label => !usedLabels.has(label.term));

        if (remainingLabels.length > 0) {
            // Check if we should show uncategorized based on setting and user role
            let shouldShow = false;

            switch (showSetting) {
                case "enable":
                    shouldShow = true;
                    break;
                case "disable":
                    shouldShow = false;
                    break;
                case "admin":
                    shouldShow = bisIsBlogAdmin(); // Only show to admin users
                    break;
                default:
                    shouldShow = true; // Default to enable
            }

            if (shouldShow) {
                const uncategorizedGroup = {
                    isGroup: true,
                    name: uncategorizedLabel,
                    options: remainingLabels
                };
                organizedLabels.push(uncategorizedGroup);
            }
            // If shouldShow is false, labels are hidden
        }

        return organizedLabels;
    }
    
    // =============================================================================
    // LAYOUT MANAGEMENT
    // =============================================================================
    function bisUpdateLayoutSwitcher() {
        if (!bisIsFeatureVisible(bisSettingConfig.features.layoutSwitcher)) return;
        const options = bisDomCache.queryAll('.bis-layout-option');

        if (options && options.length > 0) {
            options.forEach(option => {
                option.classList.remove('active');
                if (bisIsFeatureForAdmin(bisSettingConfig.features.layoutSwitcher)) {
                    option.classList.remove('bis-disabled');
                }
            });

            const activeOption = bisDomCache.query(`.bis-layout-option[data-layout="${bisCurrentView}"]`);

            if (activeOption) activeOption.classList.add('active');
        }
    }

  	function bisChangeLayout(layout) {
  		if (!bisIsFeatureFunctional(bisSettingConfig.features.layoutSwitcher)) {
            const options = bisDomCache.queryAll('.bis-layout-option');
            if (options && options.length > 0) {
                options.forEach(option => {
                    bisShakeAnimation(option);
                });
            }
            return;
        }

  		bisCurrentView = layout;
  		bisUpdateLayoutSwitcher();

  		const container = document.getElementById('bisFeedContainer');
  		if (container) {
  			container.className = 'bis-feed-container ' + layout + '-layout';

  			if (bisAllLoadedEntries.length > 0) {
  				const postsHTML = bisAllLoadedEntries.map(entry => bisRenderPost(entry)).join('');
  				container.innerHTML = postsHTML;
  			} else if (bisCurrentFeedData && bisCurrentFeedData.feed && bisCurrentFeedData.feed.entry) {
  				const postsHTML = bisCurrentFeedData.feed.entry.map(entry => bisRenderPost(entry)).join('');
  				container.innerHTML = postsHTML;
  			}
  		}

  		bisSaveUserPreferences();
  		bisUpdateUrlInBrowser();
  	}
    
    // =============================================================================
    // RENDERING FUNCTIONS
    // =============================================================================
    function bisGetOptimizedImage(entry) {
  		if (entry.media$thumbnail) {
  			const originalUrl = entry.media$thumbnail.url;
  			return originalUrl
  				.replace(/\/s[0-9]+\-c/, `/s${bisSettingConfig.content.imageWidth}-c`)
  				.replace(/\/w[0-9]+\-h[0-9]+\-p/, `/w${bisSettingConfig.content.imageWidth}-h${bisSettingConfig.content.imageHeight}-p`);
  		}
  		const content = entry.content?.$t || entry.summary?.$t || '';
  		const imgMatch = content.match(/<img[^>]+src="([^">]+)"/i);
  		return imgMatch ? imgMatch[1] : bisConfig.noImage;
  	}
    
  	function bisRenderPost(entry) {
  		// Use original title/content for display if available
        const originalTitle = entry._searchMeta?.originalTitle || entry.title.$t;
        const originalContent = entry._searchMeta?.originalContent || 
                               entry.content?.$t || entry.summary?.$t || "";
        const originalLabels = entry._searchMeta?.originalLabels || entry.category || [];

        const title = originalTitle;
        const content = originalContent;
        const link = entry.link.find(l => l.rel === "alternate").href;
        const thumbnail = bisGetOptimizedImage(entry);

  		const date = new Date(entry.published.$t);
  		const dateInfo = bisFormatDate(date);

  		const postId = entry.id.$t.split(".post-")[1];
  		const labels = entry.category?.map(cat => {
        const term = cat.term;
        const displayName = bisFormatLabelTerm(term);
        return {
            name: `#${displayName}`,
            url: `/search/label/${encodeURIComponent(term)}`
            };
        }) || [];

  		const excerpt = bisCropFeed(content, bisSettingConfig.content.excerptLength);
  		const showReadMore = content.length > bisSettingConfig.content.excerptLength;

  		// Show post ID to all users if showPostId is set to "enable"
  		const showPostIdToAll = bisIsFeatureShownToAll(bisSettingConfig.admin.showPostId);
  		const showPostIdToAdmin = bisIsBlogAdmin() && bisIsFeatureForAdmin(bisSettingConfig.admin.showPostId);
  		const shouldShowPostId = showPostIdToAll || showPostIdToAdmin;

  		const dateRow = `
                       <div class="bis-post-date-row">
                           <i class="${bisSettingConfig.icons.calendar}"></i>
                           <div class="bis-post-date-text">
                               ${dateInfo.display}
                           </div>
                       </div>
                   `;

  		const postIdElement = shouldShowPostId ?
  			`<div class="bis-post-meta">
                           <span class="bis-post-id">ID: ${postId}</span>
                       </div>` : '';

  		// Handle label clicks based on label filter functionality
  		const labelButtons = labels.map(label => {
  			if (bisIsLabelFilterFunctional()) {
  				return `<button class="bis-label-tag" onclick="bisFilterByLabel('${label.url.split('/search/label/')[1]}')">${label.name}</button>`;
  			} else {
  				return `<a href="${bisConfig.url}${label.url}" target="_blank" class="bis-label-tag">${label.name}</a>`;
  			}
  		}).join('');

  		if (bisCurrentView === 'card') {
  			return `
                       <div class="bis-post-card card">
                           <div class="bis-post-image-container" onclick="window.open('${link}', '_blank')">
                               <img class="bis-post-image" src="${thumbnail}" alt="${title}" onerror="this.src='${bisConfig.noImage}'" loading="lazy" />
                               <div class="bis-post-image-overlay">
                                   <i class="${bisSettingConfig.icons.externalLink}"></i>
                               </div>
                           </div>
                           <div class="bis-post-content">
                               <div class="bis-post-header">
                                   <a class="bis-post-title" href="${link}" target="_blank">${bisCropTitle(title, bisSettingConfig.content.titleMaxLength)}</a>
                                   ${dateRow}
                               </div>
                               ${postIdElement}
                               ${labels.length > 0 ? `
                                   <div class="bis-post-labels">
                                       ${labelButtons}
                                   </div>
                               ` : ''}
                               <div class="bis-post-excerpt">
                                   ${excerpt}
                                   ${showReadMore ? `
                                       <a href="${link}" target="_blank" class="bis-read-more-link">
                                           Read more <i class="${bisSettingConfig.icons.arrowRight}"></i>
                                       </a>
                                   ` : ''}
                               </div>
                           </div>
                       </div>
                       `;
  		} else if (bisCurrentView === 'list') {
  			return `
                       <div class="bis-post-card list">
                           <div class="bis-post-image-container" onclick="window.open('${link}', '_blank')">
                               <img class="bis-post-image" src="${thumbnail}" alt="${title}" onerror="this.src='${bisConfig.noImage}'" loading="lazy" />
                               <div class="bis-post-image-overlay">
                                   <i class="${bisSettingConfig.icons.externalLink}"></i>
                               </div>
                           </div>
                           <div class="bis-post-content">
                               <div class="bis-post-header">
                                   <a class="bis-post-title" href="${link}" target="_blank">${bisCropTitle(title, bisSettingConfig.content.titleMaxLength)}</a>
                                   ${dateRow}
                               </div>
                               ${postIdElement}
                               ${labels.length > 0 ? `
                                   <div class="bis-post-labels">
                                       ${labelButtons}
                                   </div>
                               ` : ''}
                               <div class="bis-post-excerpt">
                                   ${excerpt}
                                   ${showReadMore ? `
                                       <a href="${link}" target="_blank" class="bis-read-more-link">
                                           Read more <i class="${bisSettingConfig.icons.arrowRight}"></i>
                                       </a>
                                   ` : ''}
                               </div>
                           </div>
                       </div>
                       `;
  		} else {
  			return `
                       <div class="bis-post-card minimal">
                           <div class="bis-post-content">
                               <div class="bis-post-header">
                                   <a class="bis-post-title" href="${link}" target="_blank">${bisCropTitle(title, bisSettingConfig.content.titleMaxLength)}</a>
                                   ${dateRow}
                               </div>
                               ${postIdElement}
                               ${labels.length > 0 ? `
                                   <div class="bis-post-labels">
                                       ${labelButtons}
                                   </div>
                               ` : ''}
                               <div class="bis-post-excerpt">
                                   ${excerpt}
                                   ${showReadMore ? `
                                       <a href="${link}" target="_blank" class="bis-read-more-link">
                                           Read more <i class="${bisSettingConfig.icons.arrowRight}"></i>
                                       </a>
                                   ` : ''}
                               </div>
                           </div>
                       </div>
                       `;
  		}
  	}
    
    // =============================================================================
    // FEED/SEARCH RESULT DISPLAY
    // =============================================================================
    // Label handling
  	function bisShowLabels(feedData) {
  		try {
            if (!feedData?.feed?.category) throw new Error("Invalid feed data");

            const formatTerm = bisFormatLabelTerm;

  			const categories = [...feedData.feed.category].sort((a, b) =>
  				a.term.localeCompare(b.term)
  			);

  			// Prepare labels for search dropdown
  			const labelData = categories.map(cat => ({
  				term: cat.term,
  				displayText: formatTerm(cat.term)
  			}));

  			// Populate the search dropdown
  			bisPopulateLabelSearch(labelData);

  			const urlParams = bisParseUrlParameters();

  			// Track if we found the URL label
  			let labelFound = false;

  			if (urlParams.label && bisIsLabelFilterFunctional()) {
  				const urlLabel = urlParams.label;

  				// Try to find matching label
  				const matchingLabel = labelData.find(cat =>
  					cat.term === urlLabel ||
  					cat.term.toLowerCase() === urlLabel.toLowerCase()
  				);

  				if (matchingLabel) {
  					labelFound = true;
                  
                    // Highlight in dropdown
                    const allOptions = document.querySelectorAll('.bis-label-option');
                    allOptions.forEach(opt => opt.classList.remove('focused'));
                    const selectedOption = document.querySelector(`.bis-label-option[data-value="${matchingLabel.term}"]`);
                    if (selectedOption) {
                        selectedOption.classList.add('focused');
                    }
  				}

  				// If label not found, handle combined search
  				if (!labelFound && !bisUrlParamsProcessed && bisIsTextSearchFunctional()) {
  					bisUrlParamsProcessed = true;
  					setTimeout(() => {
  						// Check if we have both label and search parameters
  						if (urlParams.label && urlParams.search) {
  							bisHandleLabelNotFound(urlParams.label, urlParams.search);
  						} else if (urlParams.label) {
  							bisHandleLabelNotFound(urlParams.label);
  						}
  					}, 300);
  					return; // Exit early as we'll handle this via search
  				}

  				if (!labelFound) {
  					bisCurrentLabel = '';
  					bisUpdateUrlInBrowser();
  				}
  			}

  			// Handle case where both label and search exist and label was found
  			if (labelFound && urlParams.search && !bisUrlParamsProcessed && bisIsTextSearchFunctional()) {
  				bisUrlParamsProcessed = true;
  				setTimeout(() => {
  					const searchInput = document.getElementById('bisSearchInput');
  					if (searchInput) {
  						searchInput.value = urlParams.search;
  						bisHandleSearchInputChange();
  						bisSearchPost();
  					}
  				}, 100);
  			}

  			const orderFeedBy = document.getElementById("bisOrderFeedBy");
  			if (orderFeedBy && bisIsFeatureVisible(bisSettingConfig.features.sort)) {
  				orderFeedBy.disabled = !bisIsSortFunctional();
  			}
  			bisEnableSearchInput();

  			setTimeout(() => {
  				if (urlParams.search && !labelFound && !bisUrlParamsProcessed && bisIsTextSearchFunctional()) {
  					const searchInput = document.getElementById('bisSearchInput');
  					if (searchInput) {
  						searchInput.value = urlParams.search;
  						bisHandleSearchInputChange();
  						bisSearchPost();
  					}
  				} else if (labelFound || !urlParams.label) {
  					// Only load posts if label was found or no label parameter
  					bisLoadPosts();
  				}
  			}, 100);

  		} catch (error) {
  			const container = document.querySelector('.bis-label-search-container');
  			if (container && bisIsFeatureVisible(bisSettingConfig.features.labelFilter)) {
  				container.innerHTML = `<div class="bis-label-search-wrapper">
                               <input type="text" class="bis-label-search-input" placeholder="${bisSettingConfig.localization.errorLoadingCategories
}" disabled>
                               <div class="bis-label-search-dropdown">
                                   <div class="bis-label-search-options">
                                       <div class="bis-label-option" data-value="">${bisSettingConfig.localization.allCategories}</div>
                                       <div class="bis-label-error">${bisSettingConfig.localization.errorLoadingLabels}</div>
                                   </div>
                               </div>
                           </div>`;
  			}
  			bisShowError(bisSettingConfig.localization.errorLoadingLabels);
  		}
  	}
    
    // Show feed list - store all loaded entries
  	function bisShowFeedList(feedData) {
  		const showLoadMore = bisIsFeatureVisible(bisSettingConfig.content.loadMore);
  		
      	// Use the safe wrapper functions
        const getDisabledAttr = (feature) => {
            try {
                if (!bisIsAdminChecked) return 'disabled';
                return bisIsFeatureFunctional(feature) ? '' : 'disabled';
            } catch (error) {
                return 'disabled';
            }
        };

        const getDisabledClass = (feature) => {
            try {
                if (!bisIsAdminChecked) return 'bis-disabled';
                return bisIsFeatureFunctional(feature) ? '' : 'bis-disabled';
            } catch (error) {
                return 'bis-disabled';
            }
        };

  		try {
  			if (!feedData?.feed) throw new Error("Invalid feed data");
  			bisCurrentFeedData = feedData;
  			const entries = feedData.feed.entry || [];

  			if (entries.length > 0) {
  				if (bisIsLoadingMore) {
  					bisAllLoadedEntries = bisAllLoadedEntries.concat(entries);
  				} else {
  					bisAllLoadedEntries = entries;
  				}

  				const postsHTML = entries.map(entry => bisRenderPost(entry)).join("");

  				const feedContainer = bisDomCache.get("bisFeedContainer");
  				if (feedContainer) {
  					if (bisIsLoadingMore) {
  						feedContainer.innerHTML += postsHTML;
  					} else {
  						feedContainer.innerHTML = postsHTML;
  					}
  				}
              
                // Refresh cache for images since new ones were added
    			bisDomCache.refreshQueryAll('.bis-post-image[data-src]');

  				const labelInput = document.querySelector('.bis-label-search-input');
  				const resultDesc = bisDomCache.get("bisResultDesc");
  				if (resultDesc) {
  					if (labelInput?.value && bisCurrentLabel !== "" && bisIsLabelFilterFunctional()) {
  						resultDesc.innerHTML = `<i class="${bisSettingConfig.icons.filter}"></i> ${bisSettingConfig.localization.showingCategory} <strong>${labelInput.value}</strong> (${bisSettingConfig.localization.sortedBy} ${bisCurrentOrder})`;
  					} else {
  						resultDesc.innerHTML = `<i class="${bisSettingConfig.icons.newspaper}"></i> ${bisSettingConfig.localization.showAllPosts} ${bisCurrentOrder} ${bisSettingConfig.localization.posts}`;
  					}
  				}

  				bisHasMorePosts = entries.length >= bisSettingConfig.content.postsPerPage;
              
                const feedNav = bisDomCache.get("bisFeedNav");
                if (feedNav) {
                  if (bisHasMorePosts) {
                    feedNav.innerHTML = `
                                  ${showLoadMore ? `
                                  <button onclick="bisLoadMorePosts()" class="bis-nav-button next ${getDisabledClass(bisSettingConfig.content.loadMore)}" ${getDisabledAttr(bisSettingConfig.content.loadMore)}>
                                      <i class="${bisSettingConfig.icons.add}"></i> ${bisSettingConfig.localization.loadMore}
    </button>
                                  `: ''}
                              `;

                    if (bisSettingConfig.custom.loadPostMode === 'auto') {
                      // Setup auto-load on scroll (with delay for rendering)
                      if (bisIsFeatureFunctional(bisSettingConfig.content.loadMore)) {
                        // Small delay to ensure button is rendered
                        setTimeout(() => {
                          bisSetupScrollListener();
                        }, 100);
                      }
                    }

                  } else {
                    // Cleanup scroll listener when no more posts
                    if (bisSettingConfig.custom.loadPostMode === 'auto') {
                      bisCleanupScrollListener();
                    };

                    if (feedNav && !bisIsBottomBackToTopFunctional()) {
                      feedNav.innerHTML = `<button onclick="bisScrollToTop()" class="bis-nav-button front"><i class="${bisSettingConfig.icons.arrowUp}"></i> ${bisSettingConfig.localization.backToTop}</button>`;
                    } else {
                      feedNav.innerHTML = '';
                    }
                  }
                }

  				if (bisIsLoadingMore) {
  					bisStartIndex += entries.length;
  				} else {
  					bisStartIndex = entries.length + 1;
  				}

  				bisIsLoadingMore = false;
  			} else {
              	// Cleanup scroll listener when no more posts
                if (bisSettingConfig.custom.loadPostMode === 'auto') {
                  bisCleanupScrollListener();
                };
              
  				if (bisIsLoadingMore) {
  					bisHasMorePosts = false;
  					const feedNav = document.getElementById("bisFeedNav");
  					if (feedNav && !bisIsBottomBackToTopFunctional()) {
  						feedNav.innerHTML = `<button onclick="bisScrollToTop()" class="bis-nav-button front"><i class="${bisSettingConfig.icons.arrowUp}"></i> ${bisSettingConfig.localization.backToTop}</button>`;
  					} else {
                      feedNav.innerHTML = '';
                    }
  				} else {
  					bisShowNoResults();
  				}
  				bisIsLoadingMore = false;
  			}
  		} catch (error) {
  			console.error('Error in bisShowFeedList:', error);
  			bisShowNoResults();
  			bisIsLoadingMore = false;
  		} finally {
  			bisEnableSearchInput();
  		}
  	}
    
    // Show feed list search - store all loaded entries for search results
  	function bisShowFeedListSearch(feedData) {
        try {
            if (!feedData?.feed) {
                // Blogger search failed, try enhanced search
                performEnhancedSearch(bisLastSearchQuery);
                return;
            }

            const entries = feedData.feed.entry || [];
            if (entries.length > 0) {
                bisShowSearchResults(entries, bisLastSearchQuery, 'blogger');
            } else {
                // No results from Blogger, try enhanced search
                performEnhancedSearch(bisLastSearchQuery);
            }
        } catch (error) {
            console.error('Error in bisShowFeedListSearch:', error);
            performEnhancedSearch(bisLastSearchQuery);
        }
    }
    
    // Show search results (works for both Blogger and enhanced search)
    function bisShowSearchResults(entries, searchQuery, source) {
        // Sort entries by current sort order
        let sortedEntries = entries;

        if (bisCurrentOrder === 'relevance') {
            // Already sorted by relevance from bisSmartFuzzySearch
            sortedEntries = entries;
        } else if (bisCurrentOrder === 'published') {
            sortedEntries = [...entries].sort((a, b) => 
                new Date(b.published.$t) - new Date(a.published.$t)
            );
        } else if (bisCurrentOrder === 'updated') {
            sortedEntries = [...entries].sort((a, b) => {
                const dateA = a.updated ? new Date(a.updated.$t) : new Date(a.published.$t);
                const dateB = b.updated ? new Date(b.updated.$t) : new Date(b.published.$t);
                return dateB - dateA;
            });
        }
      
        bisAllLoadedEntries = entries;

        const postsHTML = entries.map(entry => bisRenderPost(entry)).join("");
        const feedContainer = bisDomCache.get("bisFeedContainer");
        if (feedContainer) feedContainer.innerHTML = postsHTML;

        const labelInput = document.querySelector('.bis-label-search-input');
        const labelText = labelInput?.value || bisSettingConfig.localization.allCategories;

        const resultDesc = bisDomCache.get("bisResultDesc");
        if (resultDesc) {
            let sourceText = '';
            if (source === 'enhanced') {
                sourceText = `<small style="font-size: 12px; color: var(--bis-accent); margin-left: 8px;"><i class="${bisSettingConfig.icons.star}"></i> ${bisSettingConfig.localization.enhancedSearch}</small>`;
            }

            resultDesc.innerHTML = `
                <span>
                    <i class="${bisSettingConfig.icons.search}"></i> 
                    ${bisSettingConfig.localization.searchResultFor} 
                    <strong>«${searchQuery}»</strong>
                    ${bisSettingConfig.localization.inCategory} 
                    <strong>«${labelText}»</strong>
                    (${bisSettingConfig.localization.sortedBy} ${bisCurrentOrder}) <!-- FIX: Use bisCurrentOrder -->
                    ${sourceText}
                </span>
            `;
        }

        const feedNav = bisDomCache.get("bisFeedNav");
        if (feedNav && !bisIsBottomBackToTopFunctional()) {
            feedNav.innerHTML = `
                <button onclick="bisScrollToTop()" class="bis-nav-button front">
                    <i class="${bisSettingConfig.icons.arrowUp}"></i> 
                    ${bisSettingConfig.localization.backToTop}
                </button>
            `;
        } else {
          feedNav.innerHTML = '';
        }
      
        // Cleanup scroll listener when no more posts
        if (bisSettingConfig.custom.loadPostMode === 'auto') {
          bisCleanupScrollListener();
        };

        bisIsSearchMode = false;
        bisIsLoadingMore = false;
        bisEnableSearchInput();
    }
    
    // No result description
  	function bisShowNoResults() {
        // Cleanup scroll listener when no more posts
        if (bisSettingConfig.custom.loadPostMode === 'auto') {
          bisCleanupScrollListener();
        };
      
        const feedContainer = document.getElementById("bisFeedContainer");
        const resultDesc = document.getElementById("bisResultDesc");
        const feedNav = document.getElementById("bisFeedNav");

        if (feedContainer) {
            feedContainer.innerHTML = `
                <div class="bis-empty-state">
                    <i class="${bisSettingConfig.icons.search}"></i>
                    <h3>${bisSettingConfig.localization.noResults}</h3>
                    <p>${bisSettingConfig.localization.adjustSearchCriteria}</p>
                </div>
            `;
        }
        if (resultDesc) resultDesc.innerHTML = bisSettingConfig.localization.noResults;
        if (feedNav) {
            feedNav.innerHTML = `<button onclick="bisResetAndRetry()" class="bis-nav-button front"><i class="${bisSettingConfig.icons.reload}"></i> ${bisSettingConfig.localization.tryAgain}</button>`;
        }

        // Clear current feed data
        bisCurrentFeedData = null;

        bisPostsLoaded = false;
        bisIsLoadingMore = false;
        bisAllLoadedEntries = [];
        bisEnableSearchInput();
    }
    
    // Show error message
    function bisShowError(message) {
  		const feedNav = bisDomCache.get("bisFeedNav");
        if (feedNav && !document.querySelector('.bis-error-message')) {
            feedNav.innerHTML = `<div class="bis-error-message">${message} <button onclick="bisInitializeSearch()">${bisSettingConfig.localization.retryButton}</button></div>`;
        }
  	}
    
    // Label not found handler
  	function bisHandleLabelNotFound(labelValue, existingSearch = "") {
        if (!bisIsLabelFilterFunctional()) return;

        let labelSearchText = labelValue;

        // Try our formatting function to extract the actual label text
        const formatted = bisFormatLabelTerm(labelValue);
        if (formatted !== labelValue) {
            labelSearchText = formatted;
        } else {
            // Fallback to old logic
            const colonIndex = labelValue.indexOf(':');
            if (colonIndex !== -1) {
                labelSearchText = labelValue.substring(colonIndex + 1).trim();
            }
        }

        // Reset label dropdown to "All Categories"
        const labelInput = document.querySelector('.bis-label-search-input');
        if (labelInput) {
            labelInput.value = '';
            bisCurrentLabel = "";
        }

        let finalSearchQuery;
        let displayText;

        if (existingSearch && existingSearch.trim()) {
            finalSearchQuery = `${labelSearchText} | ${existingSearch}`;
            displayText = `${labelSearchText} | ${existingSearch}`;
        } else {
            finalSearchQuery = labelSearchText;
            displayText = labelSearchText;
        }

        const searchInput = document.getElementById('bisSearchInput');
        if (searchInput && bisIsTextSearchFunctional()) {
            searchInput.value = displayText;
            bisLastSearchQuery = finalSearchQuery;
            bisHandleSearchInputChange();
        }

        bisUpdateUrlInBrowser();

        if (bisIsTextSearchFunctional()) {
            setTimeout(() => {
                bisSearchPost();
            }, 100);
        }
    }

    // Handle Blogger search results
    function handleBloggerSearchResults(feedData, searchQuery) {
        const searchMode = bisGetSearchModeToUse();

        try {
            if (!feedData?.feed) {
                // Blogger search failed completely
                if (searchMode === "blogger-only") {
                    showNoResultsWithFallback();
                } else {
                    // Try enhanced search for other modes
                    if (bisIsEnhancedSearchFunctional()) {
                        performEnhancedSearch(searchQuery);
                    } else {
                        showNoResultsWithFallback();
                    }
                }
                return;
            }

            let entries = feedData.feed.entry || [];

            if (entries.length > 0) {
                bisShowSearchResults(entries, searchQuery, 'blogger');
            } else {
                // Blogger returned 0 results
                if (searchMode === "blogger-only") {
                    showNoResultsWithFallback();
                } 
                else if (searchMode === "blogger-first") {
                    // Blogger-first: fallback to Enhanced
                    if (bisIsEnhancedSearchFunctional()) {
                        performEnhancedSearch(searchQuery);
                    } else {
                        showNoResultsWithFallback();
                    }
                }
                else if (searchMode === "enhanced-first") {
                    // Enhanced-first already tried Enhanced, show no results
                    showNoResultsWithFallback();
                }
                else if (searchMode === "auto") {
                    // Auto mode: try Enhanced if we didn't already
                    if (bisIsEnhancedSearchFunctional() && !shouldUseEnhancedSearch(searchQuery)) {
                        // We used Blogger first, now try Enhanced
                        performEnhancedSearch(searchQuery);
                    } else {
                        showNoResultsWithFallback();
                    }
                }
                else {
                    showNoResultsWithFallback();
                }
            }
        } catch (error) {
            console.error('Error handling search results:', error);
            showNoResultsWithFallback();
        }
    }
    
    // Helper function for handling empty Blogger results
    function handleEmptyBloggerResults(searchQuery) {
        if (bisIsSearchModeAuto()) {
            // Auto mode: try enhanced search
            performEnhancedSearch(searchQuery);
        } else if (bisIsSearchModeBloggerFirst()) {
            // Blogger-first mode: try enhanced search
            performEnhancedSearch(searchQuery);
        } else if (bisIsSearchModeEnhancedFirst()) {
            // Enhanced-first mode: already tried enhanced first, now try Blogger
            // This shouldn't happen in normal flow, but as fallback
            performEnhancedSearch(searchQuery);
        } else if (bisIsSearchModeBloggerOnly()) {
            // Blogger-only mode: show no results
            showNoResultsWithFallback();
        } else if (bisIsSearchModeEnhancedOnly()) {
            // Enhanced-only mode: try enhanced search
            if (bisIsEnhancedSearchFunctional()) {
                performEnhancedSearch(searchQuery);
            } else {
                showNoResultsWithFallback();
            }
        }
    }

    // Helper function for handling search failures
    function handleSearchFailure(searchQuery) {
        if (bisIsSearchModeAuto() || bisIsSearchModeBloggerFirst() || bisIsSearchModeEnhancedFirst()) {
            performEnhancedSearch(searchQuery);
        } else if (bisIsSearchModeBloggerOnly()) {
            showNoResultsWithFallback();
        } else if (bisIsSearchModeEnhancedOnly()) {
            if (bisIsEnhancedSearchFunctional()) {
                performEnhancedSearch(searchQuery);
            } else {
                showNoResultsWithFallback();
            }
        }
    }
    
    // =============================================================================
    // CORE OPERATIONS
    // =============================================================================
    function bisBuildLabels() {
  		// Only build labels if label filter is visible
  		if (!bisIsFeatureVisible(bisSettingConfig.features.labelFilter)) {
  			// If label filter is hidden, we still need to enable other controls
  			const orderFeedBy = document.getElementById("bisOrderFeedBy");
  			if (orderFeedBy && bisIsFeatureVisible(bisSettingConfig.features.sort)) {
  				orderFeedBy.disabled = !bisIsSortFunctional();
  			}
  			bisEnableSearchInput();
  			bisLoadPosts();
  			return;
  		}

  		const script = document.createElement("script");
  		script.onerror = () => bisShowError(bisSettingConfig.localization.errorLoadingLabels);
  		script.src = `${bisConfig.url}${bisConfig.feedPath}?max-results=&alt=${bisConfig.apiFormat}&callback=bisShowLabels`;
  		document.head.appendChild(script);
  	}
    
  	function bisLoadPosts() {
  		if (bisPostsLoaded && !bisIsLoadingMore) return;

  		bisPostsLoaded = true;

  		if (!bisIsLoadingMore) {
  			const feedContainer = bisDomCache.get("bisFeedContainer");
  			if (feedContainer) feedContainer.innerHTML = "";
  			bisStartIndex = 1;
  			bisAllLoadedEntries = [];
  		}

  		const feedNav = bisDomCache.get("bisFeedNav");
  		if (feedNav) {
  			feedNav.innerHTML = `<div class="bis-loading-state"><i class="${bisSettingConfig.icons.loading}"></i> ${bisSettingConfig.localization.loading}</div>`;
  		}

  		const script = document.createElement("script");
  		script.onerror = () => {
  			console.error('Error loading posts from:', bisConfig.url + bisConfig.feedPath);
  			bisShowError(bisSettingConfig.localization.errorLoadingPosts);
  			bisPostsLoaded = false;
  			bisIsLoadingMore = false;
  			bisEnableSearchInput();
  		};

  		let url = bisConfig.feedPath;
  		// Only apply label filter if label filter is functional
  		if (bisIsLabelFilterFunctional() && bisCurrentLabel && bisCurrentLabel !== "") {
  			url += `/-/${encodeURIComponent(bisCurrentLabel)}`;
  		}

  		// Only apply sort if sort is functional
  		const sortOrder = bisIsSortFunctional() ? bisCurrentOrder : bisSettingConfig.custom.defaultSort;

  		url += `?alt=${bisConfig.apiFormat}&max-results=${bisSettingConfig.content.postsPerPage}&orderby=${sortOrder}&start-index=${bisStartIndex}&callback=bisShowFeedList`;
  		
  		script.src = bisConfig.url + url;
  		document.head.appendChild(script);
  	}
    
    function bisLoadMorePosts() {
  		if (bisIsSearchMode || !bisHasMorePosts || bisIsLoadingMore) return;

  		if (!bisIsFeatureFunctional(bisSettingConfig.content.loadMore)) {
  			const button = document.querySelector('.next');
  			bisShakeAnimation(button);
  			return;
  		}

  		bisIsLoadingMore = true;
      
      	// Cleanup scroll listener when no more posts
        // TEMPORARILY remove scroll listener during load
        if (bisSettingConfig.custom.loadPostMode === 'auto') {
          bisCleanupScrollListener();
        };
      
  		const feedNav = document.getElementById("bisFeedNav");
  		if (feedNav) {
  			feedNav.innerHTML = `<div class="bis-loading-state"><i class="${bisSettingConfig.icons.loading}"></i> ${bisSettingConfig.localization.loading}</div>`;
  		}

  		const script = document.createElement("script");
  		script.onerror = () => {
  			bisShowError(bisSettingConfig.localization.errorLoadingMore);
  			bisHasMorePosts = false;
  			bisIsLoadingMore = false;
  			bisEnableSearchInput();
  		};

  		let url = bisConfig.feedPath;
  		// Only apply label filter if label filter is functional
  		if (bisIsLabelFilterFunctional() && bisCurrentLabel && bisCurrentLabel !== "") {
  			url += `/-/${encodeURIComponent(bisCurrentLabel)}`;
  		}

  		// Only apply sort if sort is functional
  		const sortOrder = bisIsSortFunctional() ? bisCurrentOrder : bisSettingConfig.custom.defaultSort;

  		url += `?alt=${bisConfig.apiFormat}&max-results=${bisSettingConfig.content.postsPerPage}&orderby=${sortOrder}&start-index=${bisStartIndex}&callback=bisShowFeedList`;
  		script.src = bisConfig.url + url;
  		document.head.appendChild(script);
  	}
    
  	function bisApplyFilters() {
      	// Cleanup scroll listener when no more posts
        if (bisSettingConfig.custom.loadPostMode === 'auto') {
          bisCleanupScrollListener();
        };
      
        const searchInput = document.getElementById('bisSearchInput');
        if (!searchInput) return;

        const searchQuery = searchInput.value.trim();

        bisHandleSearchInputChange();

        bisStartIndex = 1;
        bisHasMorePosts = true;
        bisPostsLoaded = false;
        bisIsLoadingMore = false;
        bisAllLoadedEntries = [];

        const feedContainer = document.getElementById("bisFeedContainer");
      
        const feedNav = bisDomCache.get("bisFeedNav");

        if (feedContainer) feedContainer.innerHTML = "";
        if (feedNav) feedNav.innerHTML = `<div class="bis-loading-state"><i class="${bisSettingConfig.icons.loading}"></i> ${bisSettingConfig.localization.loading}</div>`;

        // Check if we have an active search query AND text search is functional
        const hasActiveSearch = searchQuery && !/^[\s\u200B-\u200D\uFEFF]+$/.test(searchQuery) && bisIsTextSearchFunctional();

        if (hasActiveSearch) {
            bisSearchPost();
        } else {
            // If no active search but label filter changed, load posts with the new label
            bisIsSearchMode = false;
            bisLastSearchQuery = "";
            bisUpdateUrlInBrowser();
            bisLoadPosts();
        }

        bisSaveUserPreferences();
        bisUpdateUrlInBrowser();
    }
    
    function bisResetAndRetry() {
        // Cleanup scroll listener when no more posts
        if (bisSettingConfig.custom.loadPostMode === 'auto') {
            bisCleanupScrollListener();
        }

        // Reset attempts counter
        bisResetSearchAttempts();

        // Reset search input only
        const searchInput = document.getElementById('bisSearchInput');
        if (searchInput && bisIsTextSearchFunctional()) {
            searchInput.value = "";
            bisLastSearchQuery = "";
            bisHandleSearchInputChange();
        }

        // Reset search mode
        bisIsSearchMode = false;
        bisLastSearchQuery = "";

        // Clear URL parameters for search only (keep label parameter if exists)
        if (bisIsUrlParamsFunctional()) {
            const urlParams = new URLSearchParams(window.location.search);

            // Remove search parameter
            urlParams.delete(bisSettingConfig.custom.urlParamSearch || "q");
            urlParams.delete("q"); // Also remove default "q" parameter
            urlParams.delete("search"); // Also remove "search" parameter

            const newQueryString = urlParams.toString();
            const newUrl = window.location.pathname + (newQueryString ? `?${newQueryString}` : '');
            if (window.history.replaceState) window.history.replaceState(null, '', newUrl);
        }

        // Clear current results
        const feedContainer = document.getElementById("bisFeedContainer");
        const resultDesc = document.getElementById("bisResultDesc");
        const feedNav = document.getElementById("bisFeedNav");

        if (feedContainer) feedContainer.innerHTML = '';
        if (resultDesc) resultDesc.innerHTML = '';
        if (feedNav) {
            feedNav.innerHTML = `<div class="bis-loading-state"><i class="${bisSettingConfig.icons.loading}"></i> ${bisSettingConfig.localization.loading}</div>`;
        }

        // Reset search state
        bisPostsLoaded = false;
        bisIsLoadingMore = false;
        bisAllLoadedEntries = [];

        // Load posts (will use current label if any)
        bisLoadPosts();
    }
    
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    function bisHandleSearchInputChange() {
  		if (!bisIsTextSearchFunctional()) return;

  		const searchInput = bisDomCache.get('bisSearchInput');
        const orderSelect = bisDomCache.get('bisOrderFeedBy');

        if (!searchInput || !orderSelect) return;
      
  		let relevanceOption = orderSelect.querySelector('option[value="relevance"]');

  		if (!relevanceOption) {
  			relevanceOption = document.createElement('option');
  			relevanceOption.value = 'relevance';
  			relevanceOption.textContent = bisSettingConfig.localization.mostRelevance;
  			orderSelect.appendChild(relevanceOption);
  		}

  		if (searchInput.value.trim()) {
  			relevanceOption.style.display = 'block';
  		} else {
  			relevanceOption.style.display = 'none';
  			if (orderSelect.value === 'relevance') {
  				orderSelect.value = 'published';
  				bisCurrentOrder = 'published';
  				bisSaveUserPreferences();
  				bisUpdateUrlInBrowser();
  			}
  		}
  	}
    
    function bisEnableSearchInput() {
  		const searchInput = bisDomCache.get("bisSearchInput");
        if (searchInput && bisIsTextSearchFunctional()) {
            searchInput.disabled = false;
        }
  	}
    
    function bisShakeAnimation(element) {
  		if (element) {
  			element.style.animation = 'none';
  			setTimeout(() => {
  				element.style.animation = 'shake 0.5s ease-in-out';
  			}, 10);
  		}
  	}
    
    function bisScrollToTop() {
  		const headerSection = document.querySelector('.bis-header-section');
  		if (headerSection) {
  			headerSection.scrollIntoView({
  				behavior: 'smooth'
  			});
  		}
  	}
    
    function bisBottomScrollToTop() {
  		const isBackToTopEnabled = bisIsFeatureFunctional(bisSettingConfig.content.bottomBackToTopButton);
  		if (!isBackToTopEnabled) {
  			const button = document.querySelector(".front");
  			bisShakeAnimation(button);
  			return;
  		}
  		bisScrollToTop();
  	}
    
    function bisUpdateLabelHighlight(labelToHighlight) {
        const input = document.querySelector('.bis-label-search-input');
        const options = document.querySelectorAll('.bis-label-option');

        if (!input || !options) return;

        // Remove focused class from ALL options
        options.forEach(option => {
            option.classList.remove('focused');
        });

        // Find and highlight the specified label
        for (let option of options) {
            if (option.getAttribute('data-value') === labelToHighlight) {
                option.classList.add('focused');
                input.value = labelToHighlight === '' ? '' : option.textContent;
                break;
            }
        }
    }
    
    function bisFilterByLabel(label) {
        if (!bisIsLabelFilterFunctional()) return;

        const decodedLabel = decodeURIComponent(label);
        bisCurrentLabel = decodedLabel;

        // Update the highlight
        bisUpdateLabelHighlight(decodedLabel);

        bisApplyFilters();
    }
    
    function bisChangeLabelFilter(label) {
        // Simple condition check - if disabled, show shake and return
        if (!bisIsLabelFilterFunctional()) {
            const container = bisDomCache.query('.bis-label-search-container');
            if (container) {
                bisShakeAnimation(container);
            }
            return;
        }

        // Update the highlight
    	bisUpdateLabelHighlight(label);

        // HIDE THE DROPDOWN AFTER SELECTION
        const dropdown = document.querySelector('.bis-label-search-dropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }

        // Update state and apply filters
        bisCurrentLabel = label;  // This should be empty string for "All Categories"
        bisStartIndex = 1;
        bisHasMorePosts = true;
        bisPostsLoaded = false;
        bisIsLoadingMore = false;
        bisAllLoadedEntries = [];
        bisApplyFilters();
    }
    
  	// Change sort function - allows label filtering even when sort is disabled
  	function bisChangeSort(label) {
        // Allow label changes if label filter is functional OR sort is functional
        // This ensures label filtering works even when sort is disabled
        if (!bisIsLabelFilterFunctional() && !bisIsSortFunctional()) return;

        bisCurrentLabel = label;
        bisStartIndex = 1;
        bisHasMorePosts = true;
        bisPostsLoaded = false;
        bisIsLoadingMore = false;
        bisAllLoadedEntries = [];
        bisApplyFilters();
    }

    // =============================================================================
    // EVENT LISTENER SETUP
    // =============================================================================
    function bisSetupEventListeners() {
        const form = document.getElementById("bisPostSearcher");
        if (form && bisIsTextSearchFunctional()) {
            form.addEventListener("submit", function(e) {
                e.preventDefault();
                window.bisEnhancedSearch();
            });
        }

        const searchInput = document.getElementById('bisSearchInput');
        if (searchInput && bisIsTextSearchFunctional()) {
            // Enter key to search
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') window.bisEnhancedSearch();
            });

            // Handle input changes
            searchInput.addEventListener('input', function() {
                bisHandleSearchInputChange();

                // When user clears all text, reset and show posts
                if (!this.value.trim()) {
                    bisLastSearchQuery = "";
                    bisIsSearchMode = false;

                    // Update URL to remove search parameter
                    bisUpdateUrlInBrowser();

                    // Clear any search results and show posts based on current state
                    const feedContainer = document.getElementById("bisFeedContainer");
                    const resultDesc = document.getElementById("bisResultDesc");
                    const feedNav = document.getElementById("bisFeedNav");

                    if (feedContainer) feedContainer.innerHTML = '';
                    if (resultDesc) resultDesc.innerHTML = '';
                    if (feedNav) feedNav.innerHTML = `<div class="bis-loading-state"><i class="${bisSettingConfig.icons.loading}"></i> ${bisSettingConfig.localization.loading}</div>`;

                    // Reset search state and clear cache
                    bisPostsLoaded = false;
                    bisIsLoadingMore = false;
                    bisAllLoadedEntries = [];
                    this.value = "";

                    // Load posts - this will respect the current label filter
                    bisLoadPosts();
                }
            });

            searchInput.addEventListener('focus', function(e) {
                this.value = bisLastSearchQuery;
                this.select();
            });
        }

        // Other event listeners...
        const orderSelect = document.getElementById("bisOrderFeedBy");
        if (orderSelect && bisIsSortFunctional()) {
            orderSelect.onchange = function() {
                bisCurrentOrder = this.value;
                bisApplyFilters();
                bisSaveUserPreferences();
            };
        }

        const blogUrlInput = document.getElementById('bisBlogUrl');
        if (blogUrlInput && bisIsFeatureFunctional(bisSettingConfig.features.blogUrlSelector)) {
            blogUrlInput.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    bisSetBlogUrl();
                }
            });
        }
    }

  	// =============================================================================
  	// CSS STYLES
  	// =============================================================================
  	const mainStyles = `
    <style>
       /*----------------------------------------------------------------------------------
       BLOGGER INSTANT SEARCH - CUSTOMIZABLE CSS
       ----------------------------------------------------------------------------------*/

	   /* =============================================================================
       CORE VARIABLES
       ============================================================================= */
      :root {
        /* Main Colors */
        --bis-primary: #667eea;
        --bis-secondary: #764ba2;
        --bis-accent: #f093fb;
        --bis-success: #48bb78;

        /* Background Colors - Light Theme */
        --bis-bg-main: white;
        --bis-bg-secondary: #f8f9ff;
        --bis-bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        --bis-bg-header: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

        /* Text Colors - Light Theme */
        --bis-text-main: #1a1a1a;
        --bis-text-secondary: #2d3748;
        --bis-text-muted: #718096;
        --bis-text-light: white;

        /* Border & Shadow */
        --bis-border: #e1e5e9;
        --bis-border-light: #e2e8f0;
        --bis-border-radius: 12px;
        --bis-border-radius-sm: 8px;
        --bis-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        --bis-shadow-light: 0 4px 15px rgba(0, 0, 0, 0.05);

        /* Spacing */
        --bis-spacing-xs: 4px;
        --bis-spacing-sm: 8px;
        --bis-spacing-md: 15px;
        --bis-spacing-lg: 20px;
        --bis-spacing-xl: 30px;

        /* Typography */
        --bis-font-family: "Noto Serif Khmer", serif, -apple-system,
          BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
          "Open Sans", "Helvetica Neue", sans-serif;
        --bis-font-size-xs: 11px;
        --bis-font-size-sm: 12px;
        --bis-font-size-base: 14px;
        --bis-font-size-lg: 15px;
        --bis-font-size-xl: 18px;
        --bis-line-height: 1.5;
      }

      /* Dark Theme Variables */
      [data-mode="dark"] {
        --bis-bg-main: #1a202c;
        --bis-bg-secondary: #2d3748;
        --bis-bg-gradient: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
        --bis-bg-header: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
        --bis-text-main: #e2e8f0;
        --bis-text-secondary: #e2e8f0;
        --bis-text-muted: #a0aec0;
        --bis-border: #4a5568;
        --bis-border-light: #4a5568;
        --bis-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }

      /* =============================================================================
      BASE STYLES - Don't modify unless necessary
      ============================================================================= */          
	  .bis-container {
        font-family: var(--bis-font-family);
        line-height: var(--bis-line-height);
        color: var(--bis-text-main);
        background: var(--bis-bg-gradient);
        min-height: 100vh;
        padding: var(--bis-spacing-xs);
        border-radius: var(--bis-border-radius);
        margin-bottom: 24px;
      }

      .bis-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        background: var(--bis-bg-main);
        border-radius: var(--bis-border-radius);
        box-shadow: var(--bis-shadow);
        overflow: hidden;
        position: relative;
      }

      .bis-wrapper::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(
          90deg,
          var(--bis-primary),
          var(--bis-secondary),
          var(--bis-accent)
        );
        z-index: 10;
      }

      .bis-content-section {
        padding: var(--bis-spacing-md);
      }

      /* =============================================================================
      HEADER SECTION
      ============================================================================= */
      .bis-header-section {
        background: var(--bis-bg-header);
        color: var(--bis-text-light);
        text-align: center;
        position: relative;
        overflow: hidden;
        padding: var(--bis-spacing-sm) var(--bis-spacing-lg);
      }

      .bis-search-title {
        font-size: 1.8rem;
        padding: 0;
        font-weight: 700;
        margin: 0;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      [data-mode="dark"] .bis-search-title {
        background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .bis-subtitle {
        font-size: 1.1rem;
        font-weight: 400;
        opacity: 0.9;
        margin-bottom: 0;
        margin-top: 0;
        max-width: 768px;
        margin-left: auto;
        margin-right: auto;
      }

      /* =============================================================================
      BLOG URL SELECTOR
      ============================================================================= */
      .bis-selector {
        margin-bottom: var(--bis-spacing-lg);
        padding: var(--bis-spacing-md);
        background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.1);
        border: 1px solid #e1e5ff;
        position: relative;
        overflow: hidden;
      }

      [data-mode="dark"] .bis-selector {
        background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
        border-color: var(--bis-border);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }

      .bis-selector::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--bis-primary), var(--bis-secondary));
      }

      .bis-selector-flex {
        display: flex;
        align-items: flex-end;
        gap: var(--bis-spacing-sm);
        flex-wrap: wrap;
      }

      .bis-selector-input-group {
        flex: 1;
        min-width: 250px;
      }

      .bis-selector-label {
        display: block;
        margin-bottom: var(--bis-spacing-sm);
        font-weight: 600;
        color: var(--bis-text-secondary);
        font-size: var(--bis-font-size-base);
      }

      [data-mode="dark"] .bis-selector-label {
        color: var(--bis-text-main);
      }

      /* =============================================================================
      FORM CONTROLS
      ============================================================================= */
      .bis-container
        .bis-wrapper
        .bis-content-section
        .bis-selector
        .bis-selector-input-group
        input.bis-selector-input {
        width: 100% !important;
        padding: 10px 14px !important;
        border: 1px solid var(--bis-border-light) !important;
        border-radius: var(--bis-border-radius-sm) !important;
        font-size: var(--bis-font-size-base) !important;
        transition: all 0.2s ease !important;
        background-color: white !important;
        font-family: inherit !important;
        box-sizing: border-box !important;
        display: block !important;
        height: auto !important;
        line-height: normal !important;
        margin: 0 !important;
        color: var(--bis-text-secondary) !important;
      }

      [data-mode="dark"]
        .bis-container
        .bis-wrapper
        .bis-content-section
        .bis-selector
        .bis-selector-input-group
        input.bis-selector-input {
        background-color: var(--bis-bg-secondary) !important;
        border-color: var(--bis-border) !important;
        color: var(--bis-text-main) !important;
      }

      .bis-container
        .bis-wrapper
        .bis-content-section
        .bis-selector
        .bis-selector-input-group
        input.bis-selector-input:focus {
        outline: none !important;
        border-color: var(--bis-primary) !important;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
      }

      .bis-selector-button {
        padding: 10px 20px;
        background: var(--bis-bg-gradient);
        color: white;
        border: none;
        border-radius: var(--bis-border-radius-sm);
        cursor: pointer;
        font-weight: 600;
        font-size: var(--bis-font-size-base);
        transition: all 0.2s ease;
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        white-space: nowrap;
        height: 40px;
        font-family: inherit;
      }

      .bis-selector-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
      }

      /* =============================================================================
      SEARCH CONTROLS
      ============================================================================= */
      .bis-search-controls {
        margin-bottom: var(--bis-spacing-lg);
        background: var(--bis-bg-main);
        border-radius: 10px;
        box-shadow: var(--bis-shadow-light);
        border: 1px solid var(--bis-border);
        overflow: hidden;
        position: relative;
        display: block !important;
        overflow: visible !important;
      }

      [data-mode="dark"] .bis-search-controls {
        background: var(--bis-bg-main);
        border-color: var(--bis-border);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }

      .bis-search-controls::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--bis-primary), var(--bis-secondary));
      }

      .bis-control-group {
        display: flex !important;
        flex-direction: column !important;
      }

      .bis-control-item {
        display: flex !important;
        align-items: center !important;
        padding: 12px 15px !important;
        border-bottom: 1px solid #f1f3f4 !important;
        transition: background-color 0.2s ease !important;
        gap: var(--bis-spacing-md) !important;
      }

      [data-mode="dark"] .bis-control-item {
        border-bottom-color: var(--bis-border) !important;
      }

      .bis-control-item:hover {
        background-color: #fafbff;
      }

      [data-mode="dark"] .bis-control-item:hover {
        background-color: var(--bis-bg-secondary) !important;
      }

      .bis-control-item:last-child {
        border-bottom: none;
      }

      /* =============================================================================
      COMBINED FILTERS (Sort by + Filter by on same line)
      ============================================================================= */
      .bis-combined-filters {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        align-items: flex-end;
      }

      .bis-control-subitem {
        flex: 1 !important;
        min-width: 280px !important;
      }

      #bisOrderFeedBy,
      #bisLabelSorter {
        margin-top: 4px !important;
        font-size: var(--bis-font-size-base) !important;
      }

      /* =============================================================================
      CONTROL LABEL WRAPPERS
      ============================================================================= */
      .bis-control-label-wrapper {
        display: flex !important;
        flex-direction: column !important;
        width: 250px !important;
        font-weight: 600 !important;
        color: var(--bis-text-secondary) !important;
        font-size: var(--bis-font-size-base) !important;
        flex-shrink: 0 !important;
        min-width: 150px !important;
        font-family: inherit !important;
      }

      [data-mode="dark"] .bis-control-label-wrapper {
        color: var(--bis-text-main) !important;
      }

      .bis-search-help {
        display: block !important;
        margin-top: var(--bis-spacing-xs) !important;
        font-weight: normal !important;
      }

      .bis-search-help a {
        color: var(--bis-primary) !important;
        text-decoration: none !important;
        font-weight: 500 !important;
        transition: color 0.2s ease !important;
        cursor: pointer !important;
        display: inline !important;
        font-size: var(--bis-font-size-sm) !important;
      }

      .bis-search-help a:hover {
        color: var(--bis-secondary);
      }

      .bis-search-help small {
        color: var(--bis-text-muted) !important;
        font-size: var(--bis-font-size-xs) !important;
        display: inline !important;
      }

      [data-mode="dark"] .bis-search-help small {
        color: var(--bis-text-muted) !important;
      }

      .bis-control-input-wrapper {
        flex: 1 !important;
        min-width: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 5px !important;
      }

      /* =============================================================================
      FORM ELEMENTS - FORCE SELECT STYLING
      ============================================================================= */
      .bis-container
        .bis-wrapper
        .bis-content-section
        .bis-search-controls
        .bis-control-group
        .bis-control-item
        .bis-control-input-wrapper
        select.bis-control-select {
        width: 100% !important;
        padding: 9px 9px !important;
        border: 1px solid var(--bis-border-light) !important;
        border-radius: var(--bis-border-radius-sm) !important;
        font-size: var(--bis-font-size-base) !important;
        transition: all 0.2s ease !important;
        background-color: white !important;
        font-family: inherit !important;
        box-sizing: border-box !important;
        display: block !important;
        height: auto !important;
        line-height: normal !important;
        margin: 0 !important;
        color: var(--bis-text-secondary) !important;
        appearance: menulist !important;
        -webkit-appearance: menulist !important;
        -moz-appearance: menulist !important;
        cursor: pointer !important;
      }
      
      /* Specific styling for search strategy dropdown */
      #bisSearchStrategy {
        margin-top: 4px;
        font-size: 12px;
        padding: 4px 8px;
        background-color: white;
        border: 1px solid var(--bis-border-light);
		border-radius: 4px;
        color: var(--bis-text-secondary);
        width: 100%;
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: inherit;
      }

      .bis-container
        .bis-wrapper
        .bis-content-section
        .bis-search-controls
        .bis-control-group
        .bis-control-item
        .bis-control-input-wrapper
        input.bis-control-input {
        width: 100% !important;
        padding: 10px 14px !important;
        border: 1px solid var(--bis-border-light) !important;
        border-radius: var(--bis-border-radius-sm) !important;
        font-size: var(--bis-font-size-base) !important;
        transition: all 0.2s ease !important;
        background-color: white !important;
        font-family: inherit !important;
        box-sizing: border-box !important;
        display: block !important;
        height: auto !important;
        line-height: normal !important;
        margin: 0 !important;
        color: var(--bis-text-secondary) !important;
        cursor: text !important;
      }

      [data-mode="dark"]
        .bis-container
        .bis-wrapper
        .bis-content-section
        .bis-search-controls
        .bis-control-group
        .bis-control-item
        .bis-control-input-wrapper
        select.bis-control-select,
      [data-mode="dark"]
        .bis-container
        .bis-wrapper
        .bis-content-section
        .bis-search-controls
        .bis-control-group
        .bis-control-item
        .bis-control-input-wrapper
        input.bis-control-input,
      [data-mode="dark"] #bisSearchStrategy {
        background-color: var(--bis-bg-secondary) !important;
        border-color: var(--bis-border) !important;
        color: var(--bis-text-main) !important;
      }

      .bis-container
        .bis-wrapper
        .bis-content-section
        .bis-search-controls
        .bis-control-group
        .bis-control-item
        .bis-control-input-wrapper
        select.bis-control-select:focus,
      	.bis-container
        .bis-wrapper
        .bis-content-section
        .bis-search-controls
        .bis-control-group
        .bis-control-item
        .bis-control-input-wrapper
        input.bis-control-input:focus,
      #bisSearchStrategy:focus {
        outline: none !important;
        border-color: var(--bis-primary) !important;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
      }

      .bis-container
        .bis-wrapper
        .bis-content-section
        .bis-search-controls
        .bis-control-group
        .bis-control-item
        .bis-control-input-wrapper
        select.bis-control-select
        option,
      	#bisSearchStrategy option {
        background: white !important;
        color: var(--bis-text-secondary) !important;
        padding: 8px !important;
        font-size: var(--bis-font-size-base) !important;
      }

      [data-mode="dark"]
        .bis-container
        .bis-wrapper
        .bis-content-section
        .bis-search-controls
        .bis-control-group
        .bis-control-item
        .bis-control-input-wrapper
        select.bis-control-select
        option,
      [data-mode="dark"] #bisSearchStrategy option {
        background: var(--bis-bg-secondary) !important;
        color: var(--bis-text-main) !important;
      }

      /* =============================================================================
      SEARCH INPUT & BUTTON
      ============================================================================= */
      .bis-search-input-wrapper {
        display: flex !important;
        width: 100% !important;
        position: relative !important;
        border-radius: var(--bis-border-radius-sm) !important;
        overflow: hidden !important;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05) !important;
      }

      .bis-container
        .bis-wrapper
        .bis-content-section
        .bis-search-controls
        .bis-control-group
        .bis-control-item
        .bis-control-input-wrapper
        .bis-search-input-wrapper
        input.bis-control-input {
        flex: 1 !important;
        padding-right: 50px !important;
        border-right: none !important;
        border-radius: var(--bis-border-radius-sm) 0 0 var(--bis-border-radius-sm) !important;
        cursor: text !important;
      }

      .bis-container
        .bis-wrapper
        .bis-content-section
        .bis-search-controls
        .bis-control-group
        .bis-control-item
        .bis-control-input-wrapper
        button.bis-search-button {
        padding: 0 15px !important;
        background: var(--bis-bg-gradient) !important;
        color: white !important;
        border: none !important;
        border-radius: 0 var(--bis-border-radius-sm) var(--bis-border-radius-sm) 0 !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        font-size: var(--bis-font-size-base) !important;
        flex-shrink: 0 !important;
        display: block !important;
        font-family: inherit !important;
      }

      .bis-search-button:hover {
        transform: scale(1.02);
      }

      /* =============================================================================
      LABEL SEARCH DROPDOWN
      ============================================================================= */
      .bis-label-search-container {
        position: relative;
        width: 100%;
      }

      .bis-label-search-wrapper {
        position: relative;
        width: 100%;
      }

      .bis-label-search-input {
        width: 100% !important;
        padding: 10px 14px !important;
        border: 1px solid var(--bis-border-light) !important;
        border-radius: var(--bis-border-radius-sm) !important;
        font-size: var(--bis-font-size-base) !important;
        transition: all 0.2s ease !important;
        background-color: white !important;
        font-family: inherit !important;
        box-sizing: border-box !important;
        display: block !important;
        height: auto !important;
        line-height: normal !important;
        margin: 0 !important;
        color: var(--bis-text-secondary) !important;
      }

      [data-mode="dark"] .bis-label-search-input {
        background-color: var(--bis-bg-secondary) !important;
        border-color: var(--bis-border) !important;
        color: var(--bis-text-main) !important;
      }

      .bis-label-search-input:focus {
        outline: none !important;
        border-color: var(--bis-primary) !important;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
      }

      .bis-label-search-dropdown {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid var(--bis-border-light);
        border-radius: var(--bis-border-radius-sm);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        max-height: 200px;
        overflow-y: auto;
        z-index: 2;
        margin-top: 2px;
      }

      [data-mode="dark"] .bis-label-search-dropdown {
        background: var(--bis-bg-secondary);
        border-color: var(--bis-border);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }

      .bis-label-search-options {
        padding: 4px 0;
      }

      .bis-label-option {
        padding: 8px 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        color: var(--bis-text-secondary);
        font-size: var(--bis-font-size-base);
      }

      [data-mode="dark"] .bis-label-option {
        color: var(--bis-text-main);
      }

      .bis-label-option:hover {
          font-weight: 600;
          border-left: 4px solid var(--bis-border) !important;
          padding-left: 12px !important;
          margin-left: 4px !important;
          transition: all 0.2s ease;
      }
      .bis-label-option.focused {
      	  background: var(--bis-bg-gradient) !important;
          box-shadow: var(--bis-shadow);
          color: white !important;
      }

      .bis-label-option[data-value=""] {
          border-bottom: 1px solid var(--bis-border-light);
          margin-bottom: 4px;
          padding-bottom: 8px;
      }

      .bis-label-option.hidden {
        display: none;
      }

      .bis-label-group-header {
        padding: 6px 12px;
        font-weight: 600;
        color: var(--bis-primary);
        background: #f7fafc;
        border-bottom: 1px solid var(--bis-border-light);
        font-size: var(--bis-font-size-sm);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      [data-mode="dark"] .bis-label-group-header {
        color: #90cdf4;
        background: var(--bis-bg-secondary);
        border-bottom-color: var(--bis-border);
      }

      .bis-label-loading,
      .bis-label-error,
      .bis-label-no-results {
        padding: 8px 12px;
        color: var(--bis-text-muted);
        font-style: italic;
        font-size: var(--bis-font-size-base);
      }

      [data-mode="dark"] .bis-label-loading,
      [data-mode="dark"] .bis-label-error,
      [data-mode="dark"] .bis-label-no-results {
        color: var(--bis-text-muted);
      }

      /* =============================================================================
      LAYOUT SELECTOR
      ============================================================================= */
      .bis-layout-selector {
        display: flex;
        gap: var(--bis-spacing-sm);
        margin-bottom: var(--bis-spacing-md);
        padding: 10px 15px;
        background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
        border-radius: 10px;
        border: 1px solid #e1e5ff;
      }

      [data-mode="dark"] .bis-layout-selector {
        background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
        border-color: var(--bis-border);
      }

      .bis-layout-option {
        flex: 1;
        padding: var(--bis-spacing-sm) 12px;
        background: var(--bis-bg-main);
        border: 2px solid var(--bis-border-light);
        border-radius: var(--bis-border-radius-sm);
        cursor: pointer;
        text-align: center;
        font-weight: 600;
        font-size: var(--bis-font-size-sm);
        color: var(--bis-text-secondary);
        transition: all 0.2s ease;
      }

      [data-mode="dark"] .bis-layout-option {
        background: var(--bis-bg-secondary);
        border-color: var(--bis-border);
        color: var(--bis-text-main);
      }

      .bis-layout-option.active {
        background: var(--bis-bg-gradient);
        color: white;
        border-color: var(--bis-primary);
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
      }

      .bis-layout-option i {
        margin-right: 5px;
        font-size: var(--bis-font-size-base);
      }

      /* =============================================================================
      RESULTS DISPLAY
      ============================================================================= */
      .bis-result-description {
        margin: var(--bis-spacing-md) 0;
        padding: 12px 15px;
        background: linear-gradient(135deg, #e6fffa 0%, #b2f5ea 100%);
        border-radius: var(--bis-border-radius-sm);
        border-left: 4px solid #38b2ac;
        font-weight: 600;
        color: #234e52;
        font-size: var(--bis-font-size-base);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      }

      [data-mode="dark"] .bis-result-description {
        background: linear-gradient(135deg, #2d5a50 0%, #234e52 100%);
        color: #e6fffa;
        border-left-color: #38b2ac;
      }

      /* =============================================================================
      POST LAYOUTS
      ============================================================================= */
      .bis-feed-container.card-layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--bis-spacing-md);
        margin-bottom: var(--bis-spacing-lg);
        width: 100%;
      }

      .bis-feed-container.list-layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        gap: var(--bis-spacing-sm);
        margin-bottom: var(--bis-spacing-lg);
        width: 100%;
      }

      .bis-feed-container.minimal-layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: var(--bis-spacing-sm);
        margin-bottom: var(--bis-spacing-lg);
        width: 100%;
      }

      /* =============================================================================
      POST CARDS - All Layouts
      ============================================================================= */
      .bis-post-card {
        background: var(--bis-bg-main);
        border-radius: var(--bis-border-radius-sm);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
        border: 1px solid var(--bis-border);
        transition: all 0.3s ease;
        overflow: hidden;
        position: relative;
      }

      [data-mode="dark"] .bis-post-card {
        background: var(--bis-bg-secondary);
        border-color: var(--bis-border);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
      }

      .bis-post-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }

      [data-mode="dark"] .bis-post-card:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }

      .bis-post-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--bis-primary), var(--bis-secondary));
        z-index: 2;
      }

      /* Card Layout Specific */
      .bis-post-card.card {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 320px;
      }

      /* List Layout Specific */
      .bis-post-card.list {
        display: flex;
        min-height: 120px;
      }

      .bis-post-card.list .bis-post-image-container {
        width: 180px;
        height: 250px;
        flex-shrink: 0;
      }

      /* Minimal Layout Specific */
      .bis-post-card.minimal {
        padding: var(--bis-spacing-xs) 10px;
      }

      .bis-post-card.minimal .bis-post-content {
        padding: var(--bis-spacing-xs);
      }

      .bis-post-card.minimal .bis-post-title {
        font-size: var(--bis-font-size-base);
        margin-top: auto;
      }

      .bis-post-card.minimal .bis-post-meta {
        margin-top: 0;
        align-items: center;
      }

      .bis-post-card.minimal .bis-post-excerpt,
      .bis-post-card.minimal .bis-read-more-link {
        font-size: var(--bis-font-size-sm);
        line-height: 1.3;
      }

      .bis-post-card.minimal .bis-post-date-row,
      .bis-post-card.minimal .bis-post-date-row i,
      .bis-post-card.minimal .bis-post-id,
      .bis-post-card.minimal .bis-label-tag {
        font-size: var(--bis-font-size-xs);
        gap: var(--bis-spacing-xs);
      }

      .bis-post-card.minimal::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(135deg, var(--bis-primary), var(--bis-secondary));
      }

      /* =============================================================================
      POST CONTENT ELEMENTS
      ============================================================================= */
      .bis-post-image-container {
        position: relative;
        width: 100%;
        height: 250px;
        overflow: hidden;
        cursor: pointer;
        background: #f8f9fa;
        flex-shrink: 0;
      }

      [data-mode="dark"] .bis-post-image-container {
        background: #4a5568;
      }

      .bis-post-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
        background: var(--bis-bg-gradient);
      }

      .bis-post-image-container:hover .bis-post-image {
        transform: scale(1.03);
      }

      .bis-post-image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          135deg,
          rgba(102, 126, 234, 0.8) 0%,
          rgba(118, 75, 162, 0.8) 100%
        );
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      .bis-post-image-container:hover .bis-post-image-overlay {
        opacity: 1;
      }

      .bis-post-image-overlay i {
        color: white;
        font-size: 1.4rem;
      }

      .bis-post-content {
        padding: var(--bis-spacing-md);
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: var(--bis-spacing-xs);
      }

      .bis-post-header {
        display: block;
        flex-direction: column;
        gap: var(--bis-spacing-sm);
        flex-shrink: 0;
      }

      .bis-post-title {
        font-size: var(--bis-font-size-lg);
        font-weight: 700;
        text-decoration: none;
        color: var(--bis-text-secondary);
        line-height: 1.3;
        flex: 1;
        transition: color 0.2s ease;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        min-height: auto;
        margin-bottom: var(--bis-spacing-sm);
      }

      [data-mode="dark"] .bis-post-title {
        color: var(--bis-text-main);
      }

      .bis-post-title:hover {
        color: var(--bis-primary);
      }

      .bis-post-date-row {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--bis-text-muted);
        font-size: var(--bis-font-size-sm);
        font-weight: 500;
      }

      [data-mode="dark"] .bis-post-date-row {
        color: var(--bis-text-muted);
      }

      .bis-post-date-row i {
        color: var(--bis-primary);
        font-size: var(--bis-font-size-xs);
      }

      .bis-post-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
      }

      .bis-post-id {
        color: var(--bis-text-muted);
        font-weight: 500;
        font-size: var(--bis-font-size-xs);
        background: #f7fafc;
        padding: 3px 6px;
        border-radius: 4px;
      }

      [data-mode="dark"] .bis-post-id {
        color: var(--bis-text-muted);
        background: #4a5568;
      }

      .item-control.blog-admin .bis-post-id {
        background: linear-gradient(135deg, #fed7d7 0%, #feb2b2 100%);
        color: #742a2a;
        font-weight: 600;
      }

      [data-mode="dark"] .item-control.blog-admin .bis-post-id {
        background: linear-gradient(135deg, #742a2a 0%, #63171b 100%);
        color: #fed7d7;
      }

      .bis-post-labels {
        display: flex;
        flex-wrap: wrap;
        gap: var(--bis-spacing-xs);
        margin-top: 6px;
        flex-shrink: 0;
      }

      .bis-label-tag {
        display: inline-block;
        background: linear-gradient(135deg, #edf2f7 0%, #e2e8f0 100%);
        padding: 3px 8px;
        border-radius: 12px;
        font-size: var(--bis-font-size-xs);
        text-decoration: none;
        color: var(--bis-text-secondary);
        font-weight: 500;
        transition: all 0.2s ease;
        cursor: pointer;
        border: none;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      }

      [data-mode="dark"] .bis-label-tag {
        background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
        color: var(--bis-text-main);
      }

      .bis-label-tag:hover {
        background: var(--bis-bg-gradient);
        color: white;
        transform: translateY(-1px);
        box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
      }

      .bis-post-excerpt {
        color: var(--bis-text-secondary);
        line-height: 1.5;
        font-size: var(--bis-font-size-base);
        flex-grow: 1;
        position: relative;
        margin-top: 3px;
        min-height: 3.9em;
      }

      [data-mode="dark"] .bis-post-excerpt {
        color: var(--bis-text-muted);
      }

      .bis-read-more-link {
        display: inline-flex;
        align-items: center;
        gap: var(--bis-spacing-xs);
        color: var(--bis-primary);
        font-weight: 600;
        text-decoration: none;
        margin-top: 6px;
        transition: color 0.2s ease;
        font-size: var(--bis-font-size-sm);
        flex-shrink: 0;
      }

      .bis-read-more-link:hover {
        color: var(--bis-secondary);
        text-decoration: underline;
      }

      .bis-read-more-link i {
        font-size: var(--bis-font-size-xs);
        transition: transform 0.2s ease;
      }

      .bis-read-more-link:hover i {
        transform: translateX(1px);
      }

      /* =============================================================================
      NAVIGATION & STATES
      ============================================================================= */
      .bis-feed-navigation {
        text-align: center;
        margin: var(--bis-spacing-lg) 0;
      }

      .bis-feed-navigation.bottom {
        text-align: end;
      }

      .bis-nav-button {
        display: inline-block;
        padding: 10px 20px;
        background: var(--bis-bg-gradient);
        color: white;
        text-decoration: none;
        border-radius: var(--bis-border-radius-sm);
        font-weight: 600;
        font-size: var(--bis-font-size-base);
        transition: all 0.2s ease;
        box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);
        border: none;
        cursor: pointer;
        margin: 0 5px;
        font-family: inherit;
      }

      .bis-nav-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 12px rgba(102, 126, 234, 0.4);
      }

      .bis-nav-button.front {
        background: linear-gradient(135deg, var(--bis-success) 0%, #38a169 100%);
        box-shadow: 0 3px 10px rgba(72, 187, 120, 0.3);
      }

      .bis-nav-button.front:hover {
        box-shadow: 0 5px 12px rgba(72, 187, 120, 0.4);
      }

      .bis-loading-state {
        color: var(--bis-text-muted);
        font-style: italic;
        padding: var(--bis-spacing-md);
        font-size: var(--bis-font-size-base);
      }

      [data-mode="dark"] .bis-loading-state {
        color: var(--bis-text-muted);
      }

      /* =============================================================================
      ERROR STATES
      ============================================================================= */
      .bis-error-message {
        color: #e53e3e;
        padding: 12px 15px;
        background: linear-gradient(135deg, #fed7d7 0%, #feb2b2 100%);
        border-radius: var(--bis-border-radius-sm);
        margin: 12px 0;
        border-left: 4px solid #e53e3e;
        font-weight: 600;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      }

      [data-mode="dark"] .bis-error-message {
        background: linear-gradient(135deg, #742a2a 0%, #63171b 100%);
        color: #fed7d7;
        border-left-color: #e53e3e;
      }

      .bis-error-message button {
        margin-left: var(--bis-spacing-sm);
        padding: 6px 12px;
        background: #e53e3e;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 0.2s ease;
        font-family: inherit;
        font-size: var(--bis-font-size-sm);
      }

      .bis-error-message button:hover {
        background: #c53030;
      }

      /* =============================================================================
      EMPTY STATE
      ============================================================================= */
      .bis-empty-state {
        text-align: center;
        padding: var(--bis-spacing-xl) var(--bis-spacing-lg);
        color: var(--bis-text-muted);
        grid-column: 1 / -1;
      }

      [data-mode="dark"] .bis-empty-state {
        color: var(--bis-text-muted);
      }

      .bis-empty-state i {
        font-size: 40px;
        margin-bottom: 12px;
        color: #cbd5e0;
        opacity: 0.7;
      }

      [data-mode="dark"] .bis-empty-state i {
        color: #4a5568;
      }

      .bis-empty-state h3 {
        margin-bottom: var(--bis-spacing-sm);
        color: var(--bis-text-secondary);
        font-size: var(--bis-font-size-xl);
        font-weight: 600;
      }

      [data-mode="dark"] .bis-empty-state h3 {
        color: var(--bis-text-main);
      }

      .bis-empty-state p {
        font-size: var(--bis-font-size-base);
        max-width: 350px;
        margin: 0 auto;
      }

      /* =============================================================================
      RESPONSIVE DESIGN
      ============================================================================= */
      @media (max-width: 768px) {
        .bis-container {
          padding: 10px;
        }

        .bis-header-section {
          padding: var(--bis-spacing-md);
        }

        .bis-search-title {
          font-size: 1.5rem;
        }

        .bis-content-section {
          padding: var(--bis-spacing-md);
        }

        .bis-selector-flex {
          flex-direction: column;
          align-items: stretch;
          gap: var(--bis-spacing-sm);
        }

        .bis-selector-input-group {
          min-width: auto;
        }

        .bis-selector-button {
          width: 100%;
        }

        .bis-control-item {
          flex-direction: column;
          align-items: flex-start;
          gap: var(--bis-spacing-sm);
          padding: 12px 15px !important;
        }

        .bis-control-label-wrapper {
          width: 100% !important;
          margin-bottom: 8px !important;
          min-width: auto;
          font-size: var(--bis-font-size-base);
        }

        .bis-control-input-wrapper {
          width: 100% !important;
        }

        .bis-combined-filters {
          flex-direction: column !important;
          gap: 15px !important;
        }

        .bis-control-subitem {
          min-width: 100% !important;
          width: 100% !important;
        }
        
        #bisSearchStrategy,
        #bisOrderFeedBy
        {
          font-size: var(--bis-font-size-lg) !important;
          padding: 9px 9px !important;
          border: 1px solid var(--bis-border-light) !important;
          border-radius: var(--bis-border-radius-sm) !important;
      	}

        .bis-feed-container.card-layout {
          grid-template-columns: 1fr;
          gap: var(--bis-spacing-md);
        }

        .bis-feed-container.list-layout {
          grid-template-columns: 1fr;
        }

        .bis-feed-container.minimal-layout {
          grid-template-columns: 1fr;
        }

        .bis-post-card.list {
          flex-direction: row;
          min-height: auto;
        }

        .bis-post-card.list .bis-post-image-container {
          width: 180px;
          height: 230px;
        }

        .bis-layout-selector {
          flex-direction: column;
          gap: 6px;
        }

        .bis-post-card.list .bis-post-header,
        .bis-post-card.minimal .bis-post-header {
          display: flex;
          flex-direction: column;
          gap: var(--bis-spacing-xs);
          flex-shrink: 0;
        }

        .bis-post-card.list .bis-post-title,
        .bis-post-card.minimal .bis-post-title {
          margin-bottom: var(--bis-spacing-xs) !important;
        }

        .bis-post-card.card .bis-post-date-row,
        .bis-post-card.list .bis-post-date-row,
        .bis-post-card.minimal .bis-post-date-row {
          margin-left: 0;
          padding: 3px 0;
        }
      }

      @media only screen and (max-width: 499px) {
        .bis-post-card.list .bis-post-image-container {
          height: 200px;
          width: 100%;
        }

        .bis-post-card.list {
          display: block;
        }
      }

      /* =============================================================================
      ANIMATIONS
      ============================================================================= */
      @keyframes bisFadeInUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .bis-post-card {
        animation: bisFadeInUp 0.3s ease;
      }

      /* =============================================================================
      DISABLED STATES
      ============================================================================= */
      .bis-disabled {
        opacity: 0.6 !important;
        cursor: not-allowed !important;
        user-select: none !important;
      }

      .bis-selector-input.bis-disabled::placeholder,
      .bis-control-input.bis-disabled::placeholder,
      .bis-label-search-input.bis-disabled::placeholder {
        color: #adb5bd !important;
        font-style: italic;
      }

      .bis-control-select.bis-disabled {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border: 2px dashed #dee2e6 !important;
        color: #6c757d !important;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%236c757d' viewBox='0 0 16 16'%3E%3Cpath d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z'/%3E%3C/svg%3E") !important;
        background-repeat: no-repeat !important;
        background-position: right 0.75rem center !important;
        background-size: 16px 12px !important;
      }

      .bis-label-search-container.bis-disabled {
        position: relative;
        pointer-events: none !important;
      }

      .bis-label-search-container.bis-disabled::after {
        content: "🔒";
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        font-size: var(--bis-font-size-sm);
        z-index: 2;
        opacity: 0.7;
      }
      
      /* =============================================================================
      WAIT CHECKING
      ============================================================================= */
      .bis-verify {
        font-style: italic;
        text-align: center;
        padding: 15px;
        font-size: 14px;
        color: white;
      }
  
    </style>
    		`;
    
 	const licenseStyles = `
    <style>
	  /* License Badge Styles */
	  .bis-license-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 2;
      }

      .bis-license-info {
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: help;
        transition: all 0.3s ease;
      }

      .bis-licensed {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);
      }

      .bis-trial {
        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        color: white;
        animation: pulse 2s infinite;
        box-shadow: 0 2px 4px rgba(245, 158, 11, 0.3);
      }

      .bis-free {
        background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
        color: white;
        box-shadow: 0 2px 4px rgba(107, 114, 128, 0.3);
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
          box-shadow: 0 2px 4px rgba(245, 158, 11, 0.3);
        }
        50% {
          transform: scale(1.05);
          box-shadow: 0 4px 8px rgba(245, 158, 11, 0.5);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 2px 4px rgba(245, 158, 11, 0.3);
        }
      }

      .license-text a {
        color: white !important;
        text-decoration: none !important;
        opacity: 0.9;
      }

      .license-text a:hover {
        opacity: 1;
        text-decoration: underline !important;
      }

      .bis-license-info:hover {
        transform: translateY(-1px);
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .bis-license-info .license-text {
          display: none;
        }
      }

      /* Dark mode support */
      [data-mode="dark"] .bis-license-info {
        border: 1px solid rgba(255, 255, 255, 0.1);
      }       
  	</style>
            `;
    
    const adminSettingStyles = `
    <style>
		.bis-admin-settings-badge {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 2;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .bis-settings-icon {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        flex-shrink: 0;
        padding: 4px 8px;
      }

      .bis-settings-icon:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
      }

      .bis-settings-links {
        display: none;
        align-items: center;
        gap: 8px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 6px;
        padding: 6px 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);

        /* Animation properties */
        opacity: 0;
        transform: translateX(-10px) scale(0.9);
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      .bis-settings-links.show {
        display: flex;
        opacity: 1;
        transform: translateX(0) scale(1);
        animation: slideIn 0.3s ease-out;
      }

      .bis-settings-links a {
        display: flex;
        align-items: center;
        color: #2d3748;
        text-decoration: none;
        font-size: 12px;
        font-weight: 500;
        border-radius: 4px;
        transition: all 0.2s ease;
        white-space: nowrap;

        /* Stagger animation for links */
        opacity: 0;
        transform: translateY(-5px);
        transition: all 0.2s ease 0.1s;
      }

      .bis-settings-links.show a {
        opacity: 1;
        transform: translateY(0);
      }

      .bis-settings-links a:nth-child(1) {
        transition-delay: 0.1s;
      }

      .bis-settings-links a:nth-child(2) {
        transition-delay: 0.2s;
      }

      .bis-settings-links a:hover {
        background: rgba(102, 126, 234, 0.1);
        color: #667eea;
        transform: translateY(-1px);
      }

      .bis-settings-links i {
        font-size: 12px;
        width: 12px;
      }

      /* License Alert specific styling */
      .bis-settings-links span.bis-license-alert {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-weight: 600;
        border-radius: 6px;
        text-align: center;
        justify-content: center;
        border: none;
        font-size: 12px;
        cursor: help;
        display: flex;
    	align-items: center;
        gap: 4px;
        padding: 4px;
      }

      /* Animation keyframes */
      @keyframes slideIn {
        0% {
          opacity: 0;
          transform: translateX(-10px) scale(0.9);
        }
        70% {
          transform: translateX(2px) scale(1.02);
        }
        100% {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
      }

      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(5px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Pulse animation for the icon when active */
      .bis-settings-icon.active {
        animation: pulse 0.5s ease;
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .bis-settings-icon, .bis-settings-links.show {
          display: none;
        }
      }

      /* Dark mode */
      [data-mode="dark"] .bis-settings-links {
        background: rgba(45, 55, 72, 0.9);
        border-color: rgba(74, 85, 104, 0.5);
      }

      [data-mode="dark"] .bis-settings-links a {
        color: #e2e8f0;
      }

      [data-mode="dark"] .bis-settings-links a:hover {
        background: rgba(102, 126, 234, 0.2);
        color: #667eea;
      }
    </style>
        	`;
    
    const cacheStatusStyles = `
    <style>
		.bis-cache-status {
        position: fixed;
        bottom: 60px;
        right: 10px;
        color: white;
        padding: 10px 15px;
        border-radius: 8px;
        font-size: 12px;
        z-index: 9999;
        max-width: 250px;
        display: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .bis-cache-status.visible {
        display: flex;
        align-items: center;
        gap: 8px;
        animation: fadeInUp 0.3s ease;
      }

      .bis-cache-status.loading {
        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      }

      .bis-cache-status.info {
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      }

      .bis-cache-status.loaded {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      }

      .bis-cache-status.error {
        background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      }

      .bis-cache-status i {
        font-size: 14px;
        animation: spin 1s linear infinite;
      }

      .bis-cache-status.loaded i {
        animation: none;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    </style>
            `;
    
	// =============================================================================
    // INITIALIZATION FUNCTIONS
    // =============================================================================
    // Initialize search
    function bisInitializeSearch() {
        if (!document.querySelector('.bis-label-search-container') && bisIsFeatureVisible(bisSettingConfig.features.labelFilter)) return;

        bisClearPendingSearch();
        bisUrlParamsProcessed = false;

        const feedContainer = bisDomCache.get("bisFeedContainer");
        const resultDesc = bisDomCache.get("bisResultDesc");
        const searchInput = bisDomCache.get("bisSearchInput");
        const feedNav = bisDomCache.get("bisFeedNav");

        if (feedContainer) feedContainer.innerHTML = '';
        if (resultDesc) resultDesc.innerHTML = `<i class="${bisSettingConfig.icons.newspaper}"></i> ${bisSettingConfig.localization.showAllPosts} ${bisSettingConfig.localization.posts}`;
        if (searchInput && bisIsFeatureVisible(bisSettingConfig.features.textSearch)) {
            searchInput.disabled = !bisIsTextSearchFunctional();
        }
        if (feedNav) feedNav.innerHTML = `<div class="bis-loading-state"><i class="${bisSettingConfig.icons.loading}"></i> ${bisSettingConfig.localization.loading}</div>`;

        // Get URL parameters first
        const urlParams = bisParseUrlParameters();

        // Apply URL parameters
        bisApplyUrlParameters(urlParams);

        // Set default view based on layout switcher status
        if (bisIsLayoutSwitcherFunctional() && ['card', 'list', 'minimal'].includes(urlParams.view)) {
            // Only use URL parameter if layout switcher is enabled
            bisCurrentView = urlParams.view;
        } else {
            // Get user preferences - this will return default view if layout switcher is disabled/hidden or savePreferences is disabled
            const userPreferences = bisGetUserPreferences();
            bisCurrentView = userPreferences.view;
        }

        // Set default order based on priority:
        // 1. URL parameter (if exists and sort is functional)
        // 2. User preferences (if savePreferences is enabled)
        // 3. Default from settings
        if (urlParams.sort && bisIsSortFunctional() && ['published', 'updated', 'relevance'].includes(urlParams.sort)) {
            // URL parameter takes highest priority
            bisCurrentOrder = urlParams.sort;
        } else {
            const userPreferences = bisGetUserPreferences();
            bisCurrentOrder = userPreferences.sort;
        }

        // Update order select element
        const orderFeedBy = document.getElementById("bisOrderFeedBy");
        if (orderFeedBy && bisIsFeatureVisible(bisSettingConfig.features.sort)) {
            orderFeedBy.value = bisCurrentOrder;
            orderFeedBy.disabled = !bisIsSortFunctional();
        }
      
        // Update search strategy dropdown
        setTimeout(() => {
            bisUpdateSearchStrategyDropdown();
        }, 100);

        // UPDATE URL IMMEDIATELY WHEN SEARCHING
        bisUpdateUrlInBrowser();

        bisCurrentLabel = "";
        bisIsSearchMode = false;
        bisLastSearchQuery = "";
        bisHasMorePosts = true;
        bisStartIndex = 1;
        bisCurrentFeedData = null;
        bisPostsLoaded = false;
        bisIsLoadingMore = false;
        bisAllLoadedEntries = [];

        const savedUrl = localStorage.getItem('bisSearchUrl');
        if (savedUrl) {
            const blogUrlInput = document.getElementById('bisBlogUrl');
            if (blogUrlInput) blogUrlInput.value = savedUrl;
            bisConfig.url = savedUrl;
        } else {
            // Check if custom URL config has changed
            const newCustomUrl = bisSettingConfig.custom.customUrlConfig;
            if (newCustomUrl && newCustomUrl !== bisConfig.url) {
                // Clear cache when custom URL changes
                bisClearSearchCache();
            }
            bisConfig.url = newCustomUrl || bisConfig.url;
        }

        // Apply the correct view to the container
        const container = document.getElementById('bisFeedContainer');
        if (container) {
            container.className = 'bis-feed-container ' + bisCurrentView + '-layout';
        }

        // Update layout switcher to show correct active state
        bisUpdateLayoutSwitcher();

        if (searchInput && bisIsFeatureVisible(bisSettingConfig.features.textSearch)) {
            searchInput.value = urlParams.search || "";
            if (urlParams.search) {
                bisLastSearchQuery = urlParams.search;
            }
        }

        setTimeout(() => {
            bisHandleSearchInputChange();
        }, 100);

        bisBuildLabels();

        setTimeout(() => {
            bisEnableSearchInput();
        }, 500);
    }
    
    // Initialize system
    async function bisInitializeSystem() {
        const containers = document.querySelectorAll('.bis-container');
        if (containers.length === 0) return;
	
      	// STEP 1: Show loading state
        containers.forEach(container => {
            container.innerHTML = `<div class="bis-verify"><i class="${bisSettingConfig.icons.loading}"></i> Verifying license...</div>`;
        });

        try {
            // STEP 2: Now verify license
            const licenseResult = await bisVerifyLicense();
          
          	// STEP 3: Check admin status
            await bisCheckAdminOnce();

            // STEP 4: Generate dynamic CSS
            const dynamicCSS = bisGenerateDynamicCSS(bisSettingConfig);
          
          	// STEP 5: Add CSS to head
            document.head.insertAdjacentHTML('beforeend', dynamicCSS);

            // STEP 6: Create HTML structure (NOW bisIsBlogAdmin() will work)
            containers.forEach(async (container) => {
                container.innerHTML = await bisCreateAndRenderTemplate();
            });
          
            // STEP 7: IMPORTANT - Wait for DOM to update
            // Add a small delay to ensure the template is rendered
            await new Promise(resolve => setTimeout(resolve, 10));

            // STEP 8: NOW add badges (DOM should exist)
            bisAddLicenseBadge(licenseResult);
            bisAddAdminSettingsButton(licenseResult);

            // STEP 9: Setup event listeners
            bisSetupEventListeners();

            try {
              	// STEP 10: Initialize search
                bisInitializeSearch();

                // STEP 11: Start cache warm-up
                setTimeout(() => {
                    bisWarmSearchCache();
                }, 2000);

            } catch (searchError) {
                console.error('Error initializing search:', searchError);
                bisShowError(bisSettingConfig.localization.failedInitializeSearch);
            }

        } catch (error) {
            console.error('Initialization failed:', error);
            // Fallback
            const dynamicCSS = bisGenerateDynamicCSS(defaultSettings);
          	document.head.insertAdjacentHTML('beforeend', dynamicCSS);
            containers.forEach(async (container) => {
                container.innerHTML = await bisCreateAndRenderTemplate();
            });
            bisAddLicenseBadge({ verified: false, type: 'error', message: 'Initialization failed' });
          	bisAddAdminSettingsButton({ verified: false, type: 'error', message: 'Initialization failed' });
            bisSetupEventListeners();
            try {
                bisInitializeSearch();
                setTimeout(() => {
                    bisWarmSearchCache();
                }, 2000);
            } catch (searchError) {
                bisShowError(bisSettingConfig.localization.failedLoadContent);
            }
        }
    }
    
    // =============================================================================
    // MAIN INITIALIZATION
    // =============================================================================
    function bisMainInitialize() {
        // Load Font Awesome
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const fa = document.createElement('link');
            fa.rel = 'stylesheet';
            fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(fa);
        }

        // Add html Structure Styles and license styles
        document.head.insertAdjacentHTML('beforeend', cacheStatusStyles);
        document.head.insertAdjacentHTML('beforeend', licenseStyles);
        document.head.insertAdjacentHTML('beforeend', adminSettingStyles);
        document.head.insertAdjacentHTML('beforeend', mainStyles);

        // Find the FIRST bis element only
        const bisElement = document.querySelector('.bis[data-label]');

        if (bisElement) {
            // Check if this bis already has a bis-container
            const existingBisContainer = bisElement.nextElementSibling;
            const hasContainer = existingBisContainer && 
                               existingBisContainer.classList.contains('bis-container');

            // Only create if we don't already have a bis-container
            if (!hasContainer) {
                // Extract the data-label value
                const dataLabel = bisElement.getAttribute('data-label');

                // Create the bis-container
                const bisContainer = document.createElement('div');
                bisContainer.className = 'bis-container';
                bisContainer.setAttribute('data-label', dataLabel);

                // Insert after the bis element
                bisElement.parentNode.insertBefore(bisContainer, bisElement.nextSibling);
            }
        }

        // Now run the original initialization
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(bisInitializeSystem, 100);
            });
        } else {
            setTimeout(bisInitializeSystem, 100);
        }
    }
    
    // =============================================================================
    // GLOBAL EXPORTS (Make functions available to HTML events)
    // =============================================================================
    window.bisSetBlogUrl = bisSetBlogUrl;
    window.bisSearchPost = bisSearchPost;
    window.bisLoadMorePosts = bisLoadMorePosts;
    window.bisChangeSort = bisChangeSort;
    window.bisChangeLabelFilter = bisChangeLabelFilter;
    window.bisChangeLayout = bisChangeLayout;
    window.bisFilterByLabel = bisFilterByLabel;
    window.bisScrollToTop = bisScrollToTop;
    window.bisBottomScrollToTop = bisBottomScrollToTop;
    window.bisInitializeSearch = bisInitializeSearch;
    window.bisShowFeedList = bisShowFeedList;
    window.bisShowFeedListSearch = bisShowFeedListSearch;
    window.bisFormatLabelTerm = bisFormatLabelTerm;
    window.bisShowLabels = bisShowLabels;
    window.bisLoadPosts = bisLoadPosts;
    window.bisApplyFilters = bisApplyFilters;
    window.bisEnableSearchInput = bisEnableSearchInput;
    window.bisHandleSearchInputChange = bisHandleSearchInputChange;
    window.bisHandleLabelNotFound = bisHandleLabelNotFound;
    window.bisOpenSitemap = bisOpenSitemap;
    window.bisResetAndRetry = bisResetAndRetry;
    window.bisToggleSettingsMenu = bisToggleSettingsMenu;
    window.bisGetSettingsSheetUrl = bisGetSettingsSheetUrl;
    window.bisForceReloadCache = bisForceReloadCache;
    window.bisChangeSearchStrategy = bisChangeSearchStrategy;
    window.bisUpdateSearchStrategyDropdown = bisUpdateSearchStrategyDropdown;
    window.bisEnhancedSearch = bisEnhancedSearch;
    window.performBloggerSearch = performBloggerSearch;
    window.performEnhancedSearch = performEnhancedSearch;
    window.handleBloggerSearchResults = handleBloggerSearchResults;
    
    // =============================================================================
    // START THE APPLICATION
    // =============================================================================
    bisMainInitialize();
  })();
