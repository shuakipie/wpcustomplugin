<template>
    <div class="sui-modal sui-modal-md">
        <div role="dialog"
             id="waf-modal"
             aria-modal="true"
             class="sui-modal-content"
             aria-label="New 2FA Options and Notifications Upgrade">

            <div class="sui-box">
                <div class="sui-box-header sui-flatten sui-content-center sui-spacing-top--60">
                    <figure class="sui-box-banner" aria-hidden="true">
                        <img :src="assetUrl('assets/img/waf-modal.png')">
                    </figure>
                    <button @click="hide" class="modal-close-button sui-button-icon sui-button-float--right">
                        <i class="sui-icon-close sui-md" aria-hidden="true"></i>
                        <span class="sui-screen-reader-text">Close this dialog.</span>
                    </button>

                    <h3 class="sui-box-title sui-lg">
                        {{__('WPMU DEV WAF!')}}
                    </h3>

                    <p class="sui-description">
                        {{__('WPMU DEV’s Web Application Firewall (WAF) is a first layer of protection to block hackers and bot attacks before they ever reach your site. The WAF filters requests against our highly optimized managed ruleset covering common attacks (OWASP top ten) and performs virtual patching of WordPress core, plugin, and theme vulnerabilities. This feature is now available for WPMU DEV members.')}}
                    </p>
                </div>
                <div class="sui-box-footer sui-flatten sui-content-center sui-spacing-bottom--50">
                    <submit-button @click="hide" type="submit" :state="state"
                                   css-class="sui-button quicksetup-apply">
                        {{__('Got it')}}
                    </submit-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import base_helper from '../../../helper/base_hepler'

    export default {
        name: "waf-modal",
        mixins: [base_helper],
        data: function () {
            return {
                nonces: dashboard.new_features.nonces,
                endpoints: dashboard.new_features.endpoints,
                state: {
                    on_saving: false
                }
            }
        },
        methods: {
            hide: function () {
                this.httpPostRequest('hide', this.model, function (response) {
                    SUI.closeModal()
                })
            }
        },
        mounted() {
            document.onreadystatechange = () => {
                if (document.readyState === "complete") {
                    const modalId = 'waf-modal',
                        focusAfterClosed = 'wpbody',
                        focusWhenOpen = 'waf-modal',
                        hasOverlayMask = false,
                        isCloseOnEsc = false
                    ;

                    SUI.openModal(
                        modalId,
                        focusAfterClosed,
                        focusWhenOpen,
                        hasOverlayMask,
                        isCloseOnEsc
                    );
                }
            }
        }
    }
</script>