One-Page-Analytics
==================

If you have a one page site, you'll be able, with this little javascript code, to track which sections of your site your user has gone to. Fully compliant with Google Analytics, you'll be able to see these sections as "pageviews" in analytics, and then see, for example, how long they stayed on this or that section.

HOW TO USE: 
1 : include the javascript code on your page, after jQuery

    <script src="/js/one-page-analytics-1.0.js"></script>        
        
2 : define OPA.sections then call OPA.init();

    <script>
        OPA.sections = [
            {
                selector: 'section:eq(1)', // jQuery selector of this element, which, when viewed, will trigger a pageview
                name: 'about-us' // name of the page for Google Analytics
            },
            {
                selector: 'section:eq(2)',
                name: 'portfolio'
            },
            {
                selector: 'footer',
                name: 'contact'
            }
        ];
        OPA.init();
    </script>
