<template>
	<div class="sui-toggle-content">
			<span class="sui-description toogle-content-description">
				{{ __( 'Enabling this security header can give them the opportunity to perform cross-site scripting and compromise the website.' ) }}
			</span>
	</div>
</template>
<script>
	import helper from '../../../helper/base_hepler';

	export default {
		mixins: [helper],
		name: "sh-content-type-options"
	}
</script>