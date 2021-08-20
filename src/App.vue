<template>
  <div id="app">
    <nav
      id="nav"
      class="noselect"
    >
      <ul>
        <li
          v-for="item in menu"
          :key="item.name"
        >
          <template v-if="item.path">
            <router-link :to="item.path">{{ item.name }}</router-link>
          </template>
          <template v-else>
            {{ item.name }}
            <ul>
              <li
                v-for="childItem in item.children"
                :key="childItem.name"
              >
                <router-link :to="item.parentPath + childItem.path">{{ childItem.name }}</router-link>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      menu: [
        {
          name: 'Overview',
          path: '/'
        },
        {
          name: 'Сlasses',
          parentPath: '/classes',
          children: [
            {
              name: 'Warrior',
              path: '/warrior'
            },
            {
              name: 'Mage',
              path: '/mage'
            },
            {
              name: 'Healer',
              path: '/healer'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #272727;
}

nav {
  height: 100%;
  width: 400px;
  padding: 30px;
  background-color: wheat;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

main {
  height: 100%;
  width: 100%;
  background-color: #42b983;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
