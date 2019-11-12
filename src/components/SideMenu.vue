<template>
<nav class="side-menu">
	<ul class="nav flex-column">
		<li class="nav-item">
			<button class="btn btn-light sidemenu-item" type="button" v-on:click="sideMenuShowBoards()">{{ boards }}</button>
		</li>
		<li class="nav-item">
			<button class="btn btn-light sidemenu-item" type="button" v-on:click="sideMenuShowMain()">{{ main }}</button>
		</li>
	</ul>
</nav>
</template>

<script>

export default {
    name: 'SideMenu',
    props: ['showBoards', 'showMain'],

    data: () => ({
        boards: 'Tablice',
		main: 'Strona główna',
    }),

    methods: {
        sideMenuShowBoards: function() {
            this.$emit("menu-change", true);
        },

        sideMenuShowMain: function() {
            this.$emit("menu-change", false);
        }
    }
}

</script>