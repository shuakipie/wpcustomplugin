<template>
    <div class="sui-box">
        <div class="sui-box-header">
            <h3 class="sui-box-title">
                <img :src="assetUrl('/assets/img/waf@3x.svg')"/>&nbsp;
                {{__("Web Application Firewall")}}
            </h3>
            <div class="sui-actions-left">
                <span class="sui-tag sui-tag-pro">{{__("Pro")}}</span>
            </div>
        </div>
        <div class="sui-box-body">
            <p>
                {{__("WPMU DEV’s new hosted WAF filters requests against a highly optimized managed ruleset covering common attacks and performs virtual patching of WordPress core, plugin, and theme vulnerabilities.")}}
            </p>
            <div class="sui-box-settings-row sui-upsell-row">
                <div class="sui-upsell-notice no-padding">
                    <p>
                        {{__("WPMU DEV’s WAF is the ultimate in security but your site must be hosted with us to activate the feature.")}}<br/>
                        <a class="premium-button sui-button sui-button-purple" target='_blank'
                           :href="campaign_url('defender_dash_waf_upgrade_button')">{{__("Host with us today")}}</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import base_hepler from "../../../helper/base_hepler";

    export default {
        name: "waf_free",
        mixins: [base_hepler],
    }
</script>