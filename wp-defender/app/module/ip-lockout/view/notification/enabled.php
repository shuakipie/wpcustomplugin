<div class="sui-box">
    <div class="sui-box-header">
        <h3 class="sui-box-title"><?php _e( "Notification", wp_defender()->domain ) ?></h3>
    </div>
    <form method="post" id="settings-frm" class="ip-frm">
        <div class="sui-box-body">
            <div class="sui-box-settings-row">
                <div class="sui-box-settings-col-1">
                    <span class="sui-settings-label">
                        <?php esc_html_e( "Email Notifications", wp_defender()->domain ) ?>
                    </span>
                    <span class="sui-description">
                        <?php esc_html_e( "Choose which lockout notifications you wish to be notified about. These are sent instantly.", wp_defender()->domain ) ?>
                    </span>
                </div>

                <div class="sui-box-settings-col-2">
                    <div class="sui-form-field">
                        <input type="hidden" name="login_lockout_notification" value="0"/>
                        <label class="sui-toggle">
                            <input role="presentation" type="checkbox" name="login_lockout_notification"
                                   class="toggle-checkbox"
                                   id="login_lockout_notification" value="1"
								<?php checked( true, $settings->login_lockout_notification ) ?>/>
                            <span class="sui-toggle-slider"></span>
                        </label>
                        <label for="login_lockout_notification" class="sui-toggle-label">
							<?php esc_html_e( "Login Protection Lockout", wp_defender()->domain ) ?>
                        </label>
                        <p class="sui-description">
							<?php esc_html_e( "When a user or IP is locked out for trying to access your login area.", wp_defender()->domain ) ?>
                        </p>
                    </div>
                    <div class="sui-form-field">
                        <input type="hidden" name="ip_lockout_notification" value="0"/>
                        <label class="sui-toggle">
                            <input role="presentation" type="checkbox" name="ip_lockout_notification"
                                   class="toggle-checkbox"
                                   id="ip_lockout_notification" value="1"
								<?php checked( true, $settings->ip_lockout_notification ) ?>/>
                            <span class="sui-toggle-slider"></span>
                        </label>
                        <label for="ip_lockout_notification" class="sui-toggle-label">
							<?php esc_html_e( "404 Detection Lockout", wp_defender()->domain ) ?>
                        </label>
                        <p class="sui-description">
							<?php esc_html_e( "When a user or IP is locked out for repeated hits on non-existent files.", wp_defender()->domain ) ?>
                        </p>
                    </div>
                </div>
            </div>
            <div class="sui-box-settings-row">
                <div class="sui-box-settings-col-1">
                    <span class="sui-settings-label">
                        <?php esc_html_e( "Email Recipients", wp_defender()->domain ) ?>
                    </span>
                    <span class="sui-description">
                        <?php esc_html_e( "Choose which of your website???s users will receive lockout notifications via email.", wp_defender()->domain ) ?>
                    </span>
                </div>

                <div class="sui-box-settings-col-2">
					<?php $email_search->renderInput() ?>
                </div>
            </div>
            <div class="sui-box-settings-row">
                <div class="sui-box-settings-col-1">
                    <span class="sui-settings-label">
                        <?php esc_html_e( "Repeat Lockouts", wp_defender()->domain ) ?>
                    </span>
                    <span class="sui-description">
                        <?php esc_html_e( "If you???re getting too many emails from IPs who are repeatedly being locked out you can turn them off for a period of time.", wp_defender()->domain ) ?>
                    </span>
                </div>

                <div class="sui-box-settings-col-2">
                    <input type="hidden" name="cooldown_enabled" value="0"/>
                    <label class="sui-toggle">
                        <input role="presentation" type="checkbox" name="cooldown_enabled"
                               class="toggle-checkbox"
                               id="cooldown_enabled" value="1"
							<?php checked( true, $settings->cooldown_enabled ) ?>/>
                        <span class="sui-toggle-slider"></span>
                    </label>
                    <label for="cooldown_enabled" class="sui-toggle-label">
						<?php esc_html_e( "Limit email notifications for repeat lockouts", wp_defender()->domain ) ?>
                    </label>
                    <div class="sui-border-frame sui-toggle-content">
                        <div class="sui-form-field">
                            <label class="sui-label"><?php _e( "<strong>Threshold</strong> - The number of lockouts before we turn off emails" ) ?></label>
                            <select name="cooldown_number_lockout">
                                <option <?php selected( '1', $settings->cooldown_number_lockout ) ?> value="1">1
                                </option>
                                <option <?php selected( '3', $settings->cooldown_number_lockout ) ?> value="3">3
                                </option>
                                <option <?php selected( '5', $settings->cooldown_number_lockout ) ?> value="5">5
                                </option>
                                <option <?php selected( '10', $settings->cooldown_number_lockout ) ?> value="10">10
                                </option>
                            </select>
                        </div>
                        <div class="sui-form-field">
                            <label class="sui-label"><?php _e( "<strong>Cool Off Period</strong> - For how long should we turn them off?" ) ?></label>
                            <select name="cooldown_period">
                                <option <?php selected( '1', $settings->cooldown_period ) ?>
                                        value="1"><?php _e( "1 hour", wp_defender()->domain ) ?></option>
                                <option <?php selected( '2', $settings->cooldown_period ) ?>
                                        value="2"><?php _e( "2 hours", wp_defender()->domain ) ?></option>
                                <option <?php selected( '6', $settings->cooldown_period ) ?>
                                        value="6"><?php _e( "6 hours", wp_defender()->domain ) ?></option>
                                <option <?php selected( '12', $settings->cooldown_period ) ?>
                                        value="12"><?php _e( "12 hours", wp_defender()->domain ) ?></option>
                                <option <?php selected( '24', $settings->cooldown_period ) ?>
                                        value="24"><?php _e( "24 hours", wp_defender()->domain ) ?></option>
                                <option <?php selected( '36', $settings->cooldown_period ) ?>
                                        value="36"><?php _e( "36 hours", wp_defender()->domain ) ?></option>
                                <option <?php selected( '48', $settings->cooldown_period ) ?>
                                        value="48"><?php _e( "48 hours", wp_defender()->domain ) ?></option>
                                <option <?php selected( '168', $settings->cooldown_period ) ?>
                                        value="168"><?php _e( "7 days", wp_defender()->domain ) ?></option>
                                <option <?php selected( '720', $settings->cooldown_period ) ?>
                                        value="720"><?php _e( "30 days", wp_defender()->domain ) ?></option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sui-box-footer">
	        <?php wp_nonce_field( 'saveLockoutSettings' ) ?>
            <input type="hidden" name="action" value="saveLockoutSettings"/>
            <div class="sui-actions-right">
                <button type="submit" class="sui-button sui-button-blue">
                    <i class="sui-icon-save" aria-hidden="true"></i>
			        <?php _e( "Save Changes", wp_defender()->domain ) ?>
                </button>
            </div>
        </div>
    </form>
</div>