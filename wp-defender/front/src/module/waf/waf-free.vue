<template>
    <div class="sui-wrap" :class="maybeHighContrast">
        <div class="sui-header">
            <h1 class="sui-header-title">
                {{__("Web Application Firewall")}}
            </h1>
            <doc-link
                    link="https://premium.wpmudev.org/docs/wpmu-dev-plugins/defender/"></doc-link>
        </div>
        <div class="sui-box">
            <div class="sui-box-header">
                <h3 class="sui-box-title">
                    {{__("Get Started")}}
                </h3>
                <div class="sui-actions-left">
                    <span class="sui-tag sui-tag-pro">Pro</span>
                </div>
            </div>
            <div class="sui-message">
                <img class="sui-image"
                     :src="assetUrl('assets/img/lockout-man.svg')">
                <div class="sui-message-content">
                    <p>
                        {{__("WPMU DEV’s Web Application Firewall (WAF) is a first layer of protection to block hackers and bot attacks before they ever reach your site. The WAF filters requests against our highly optimized managed ruleset covering common attacks (OWASP top ten) and performs virtual patching of WordPress core, plugin, and theme vulnerabilities. It's the ultimate in security but you must be a WPMU DEV member and hosted with us to activate it!")}}
                    </p>
                    <a :href="campaign_url('defender_waf_upgrade_button')"
                       target="_blank" class="sui-button sui-button-purple">{{__('Host with us today')}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import base_hepler from "../../helper/base_hepler";

    export default {
        mixins: [base_hepler],
        name: "waf_free"
    }
</script>