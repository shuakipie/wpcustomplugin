<template>
    <div class="sui-box">
        <div class="sui-box-header">
            <h3 class="sui-box-title">
                <img :src="assetUrl('/assets/img/waf@3x.svg')"/>&nbsp;
                {{__('Web Application Firewall')}}
            </h3>
        </div>
        <div class="sui-box-body" v-if="on_us===false">
            <p>
                {{__('WPMU DEV’s new hosted WAF filters requests against a highly optimized managed ruleset covering common attacks and performs virtual patching of WordPress core, plugin, and theme vulnerabilities. WPMU DEV’s WAF is the ultimate in security but your site must be hosted with us to activate the feature.')}}
            </p>
            <a target="_blank" :href="get_migrate_url" class="sui-button sui-button-blue">{{__('Migrate my site')}}</a>
        </div>
        <div class="sui-box-body" v-if="on_us===true && status===false">
            <p>
                {{__('WPMU DEV’s new hosted WAF filters requests against a highly optimized managed ruleset covering common attacks and performs virtual patching of WordPress core, plugin, and theme vulnerabilities.')}}
            </p>
            <a target="_blank" :href="get_waf_url" class="sui-button sui-button-blue">{{__('Activate')}}</a>
        </div>
        <div class="sui-box-body" v-if="on_us===true && status===true">
            <p>
                {{__('WPMU DEV’s new hosted WAF filters requests against a highly optimized managed ruleset covering common attacks and performs virtual patching of WordPress core, plugin, and theme vulnerabilities.')}}
            </p>
            <div class="sui-notice sui-notice-info">
                <div class="sui-notice-content">
                    <div class="sui-notice-message">
                        <i class="sui-notice-icon sui-icon-info sui-md" aria-hidden="true"></i>
                        <p>{{__('This site has WAF protection enabled.')}}</p>
                    </div>
                </div>
            </div>
            <p class="text-center sui-description no-margin-top" v-html="get_waf_text"></p>
        </div>
    </div>
</template>

<script>
    import base_hepler from "../../../helper/base_hepler";

    export default {
        name: "waf",
        mixins: [base_hepler],
        data: function () {
            return {
                on_us: dashboard.waf.waf.hosted,
                site_id: dashboard.waf.site_id,
                status: dashboard.waf.waf.status
            }
        },
        computed: {
            get_migrate_url: function () {
                return 'https://premium.wpmudev.org/hub2/site/' + this.site_id + '/hosting';
            },
            get_waf_url: function () {
                return 'https://premium.wpmudev.org/hub2/site/' + this.site_id + '/hosting/tools#update-waf';
            },
            get_waf_text: function () {
                return this.vsprintf(this.__('At this time, you can manage all WAF settings via <a target="_blank" href="%s">The Hub.</a>'), 'https://premium.wpmudev.org/hub2/')
            }
        }
    }
</script>