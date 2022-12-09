<template>
    <div class="sui-wrap" :class="maybeHighContrast">
        <div class="sui-header">
            <h1 class="sui-header-title">
                {{__("Web Application Firewall")}}
            </h1>
            <doc-link
                    link="https://premium.wpmudev.org/docs/wpmu-dev-plugins/defender/"></doc-link>
        </div>
        <div class="sui-box" v-if="on_us===true && status===true">
            <div class="sui-box-header">
                <h3 class="sui-box-title">
                    {{__("Settings")}}
                </h3>
            </div>
            <div class="sui-box-body">
                <p>{{__('Our Web Application Firewall (WAF) is a first layer of protection to block hackers and bot attacks before they ever reach your site. The WAF filters requests against our highly optimized managed ruleset covering common attacks (OWASP top ten) and performs virtual patching of WordPress core, plugin, and theme vulnerabilities.')}}</p>
                <div class="sui-notice sui-notice-info">
                    <div class="sui-notice-content">
                        <div class="sui-notice-message">
                            <i class="sui-notice-icon sui-icon-info sui-md" aria-hidden="true"></i>
                            <p>{{__('This site has WAF protection enabled. Please keep in mind, that the status can be cached for 5 minutes and it is likely, that the changes you will make in the Hub won\'t be updated in the plugin immediately.')}}</p>
                        </div>
                    </div>
                </div>
                <div class="sui-box-settings-row">
                    <div class="sui-box-settings-col-1">
                        <span class="sui-settings-label-with-tag">
                            {{__('Configure')}}
                            <span class="sui-tag sui-tag-blue">{{__('Coming Soon')}}</span>
                        </span>
                        <span class="sui-description">{{__('Configure and manage your IP and user agent rules. Note: we’ll honour the rules set in Defender’s basic Firewall too.')}}</span>
                    </div>
                    <div class="sui-box-settings-col-2">
                        <p class="margin-bottom-10" v-html="get_waf_text"></p>
                        <a target="_blank" :href="get_waf_url" class="sui-button sui-button-ghost">
                            <i class="sui-icon-wrench-tool"></i>{{__('Manage Rules')}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="sui-box" v-else>
            <div class="sui-floating-notices">
                <div
                        role="alert"
                        id="status-cached"
                        class="sui-notice sui-notice-info"
                        aria-live="assertive"
                >
                </div>
            </div>
            <div class="sui-box-header">
                <h3 class="sui-box-title">
                    {{__("Get Started")}}
                </h3>
                <div class="sui-actions-right">
                    <submit-button @click="recheck_status" type="submit" :state="state"
                                   css-class="sui-button sui-button-ghost">
                        <i class="sui-icon-update"></i>
                        {{__('Re-check Status')}}
                    </submit-button>
                </div>
            </div>
            <div class="sui-message" v-if="on_us!==true">
                <img class="sui-image"
                     :src="assetUrl('assets/img/lockout-man.svg')">
                <div class="sui-message-content">
                    <p>
                        {{__("WPMU DEV’s Web Application Firewall (WAF) is a first layer of protection to block hackers and bot attacks before they ever reach your site. The WAF filters requests against our highly optimized managed ruleset covering common attacks (OWASP top ten) and performs virtual patching of WordPress core, plugin, and theme vulnerabilities. It's the ultimate in security but your site must be hosted with WPMU DEV to activate it!")}}
                    </p>
                    <a target="_blank" :href="get_migrate_url"
                       class="sui-button sui-button-blue">{{__('Migrate my site')}}</a>
                </div>
            </div>
            <div class="sui-message" v-if="on_us===true && status===false ">
                <img class="sui-image"
                     :src="assetUrl('assets/img/lockout-man.svg')">
                <div class="sui-message-content">
                    <p>
                        {{__("WPMU DEV’s Web Application Firewall (WAF) is a first layer of protection to block hackers and bot attacks before they ever reach your site. The WAF filters requests against our highly optimized managed ruleset covering common attacks (OWASP top ten) and performs virtual patching of WordPress core, plugin, and theme vulnerabilities. It's the ultimate in security, activate it via The Hub now!")}}
                    </p>
                    <a target="_blank" data-notice-open="status-cached" :data-notice-message="get_cached_notice_message"
                       :href="get_waf_url"
                       data-notice-dismiss="true"
                       class="sui-button sui-button-blue">{{__('Activate WAF')}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import base_hepler from "../../helper/base_hepler";

    export default {
        mixins: [base_hepler],
        name: "waf",
        data: function () {
            return {
                on_us: waf.waf.hosted,
                site_id: waf.site_id,
                status: waf.waf.status,
                notice: {
                    display: 'none'
                },
                state: {
                    on_saving: false
                },
                nonces: waf.nonces,
                endpoints: waf.endpoints
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
            },
            get_cached_notice_message: function () {
                return '<p>' + this.__("The status can be cached for 5 minutes, and it is likely, that the changes you will make in the Hub won't be updated in the plugin immediately. You can wait a little bit and re-check again to get the updated status.") + '</p>';
            }
        },
        methods: {
            recheck_status: function () {
                let self = this;
                this.httpPostRequest('recheck', {}, function (response) {
                    self.status = response.data.waf.status;
                })
            },
            close_notice: function () {
                SUI.closeNotice('status-cached');
            }
        },
    }
</script>