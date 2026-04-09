<script setup lang="ts">
import { ref, h, markRaw } from "vue"
import { TextField } from "@/components/ui/textfield"
import ShowcaseCard from "../ShowcaseCard.vue"

const email = ref("")
const username = ref("")
const password = ref("")
const search = ref("")
const showPassword = ref(false)

// Icon components
const SearchIcon = markRaw({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
    h('circle', { cx: 11, cy: 11, r: 8 }),
    h('path', { d: 'm21 21-4.3-4.3' })
  ])
})

const EmailIcon = markRaw({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
    h('rect', { width: 20, height: 16, x: 2, y: 4, rx: 2 }),
    h('path', { d: 'm22 7-8.97 5.7A1 1 0 0 1 12 16v-4' })
  ])
})

const PasswordIcon = markRaw({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
    h('path', { d: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' }),
    h('circle', { cx: 12, cy: 12, r: 3 })
  ])
})

// Iconos para prepend/append externos
const UserIcon = markRaw({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
    h('path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' }),
    h('circle', { cx: 12, cy: 7, r: 4 })
  ])
})

const ExternalLinkIcon = markRaw({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
    h('path', { d: 'M15 3h6v6' }),
    h('path', { d: 'M10 14 21 3' }),
    h('path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' })
  ])
})

const EyeIcon = markRaw({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
    h('path', { d: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' }),
    h('circle', { cx: 12, cy: 12, r: 3 })
  ])
})

const CopyIcon = markRaw({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
    h('rect', { width: 14, height: 14, x: 8, y: 8, rx: 2, ry: 2 }),
    h('path', { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' })
  ])
})
</script>

<template>
  <div class="space-y-8">
    <!-- Page header -->
    <div>
      <div class="flex items-center gap-3">
        <h1 class="text-2xl font-bold tracking-tight">TextField</h1>
        <span class="rounded-full bg-lume-primary/10 px-2.5 py-0.5 text-xs font-medium text-lume-primary">Component</span>
      </div>
      <p class="text-lume-muted-foreground mt-1 text-sm">
        Input component with built-in label, description, and error states.
      </p>
    </div>

    <!-- Quick preview -->
    <ShowcaseCard title="Preview" description="Default text field">
      <div class="py-6">
        <TextField
          label="Email"
          placeholder="you@example.com"
          description="We'll never share your email with anyone."
        />
      </div>
    </ShowcaseCard>

    <!-- Basic usage -->
    <div id="section-basic">
      <ShowcaseCard title="Basic Usage" description="Simple text field with label">
        <div class="space-y-4">
          <div class="max-w-sm">
            <TextField
              label="Username"
              placeholder="Enter your username"
              v-model="username"
            />
          </div>
          <div class="rounded-lg bg-lume-muted/50 p-3">
            <pre class="text-xs font-mono text-lume-muted-foreground">&lt;TextField label="Username" placeholder="..." /&gt;</pre>
          </div>
        </div>
      </ShowcaseCard>
    </div>

    <!-- With description -->
    <div id="section-description">
      <ShowcaseCard title="With Description" description="Field with help text">
        <div class="space-y-4">
          <div class="max-w-sm">
            <TextField
              label="Email"
              type="email"
              placeholder="you@example.com"
              description="We'll never share your email with anyone."
              v-model="email"
            />
          </div>
          <div class="rounded-lg bg-lume-muted/50 p-3">
            <pre class="text-xs font-mono text-lume-muted-foreground">description="Help text here"</pre>
          </div>
        </div>
      </ShowcaseCard>
    </div>

    <!-- Error state -->
    <div id="section-error">
      <ShowcaseCard title="Error State" description="Field with validation error">
        <div class="space-y-4">
          <div class="max-w-sm">
            <TextField
              label="Password"
              type="password"
              placeholder="Enter password"
              error="Password must be at least 8 characters"
              v-model="password"
            />
          </div>
          <div class="rounded-lg bg-lume-muted/50 p-3">
            <pre class="text-xs font-mono text-lume-muted-foreground">error="Error message"</pre>
          </div>
        </div>
      </ShowcaseCard>
    </div>

    <!-- Sizes -->
    <div id="section-sizes">
      <ShowcaseCard title="Sizes" description="Small, default, and large variants">
        <div class="space-y-4">
          <div class="space-y-4">
            <div class="max-w-sm">
              <TextField
                label="Small"
                size="sm"
                placeholder="Small input"
              />
            </div>
            <div class="max-w-sm">
              <TextField
                label="Default"
                size="default"
                placeholder="Default input"
              />
            </div>
            <div class="max-w-sm">
              <TextField
                label="Large"
                size="lg"
                placeholder="Large input"
              />
            </div>
          </div>
          <div class="rounded-lg bg-lume-muted/50 p-3">
            <pre class="text-xs font-mono text-lume-muted-foreground">&lt;TextField size="sm | default | lg" /&gt;</pre>
          </div>
        </div>
      </ShowcaseCard>
    </div>

    <!-- Input types -->
    <div id="section-types">
      <ShowcaseCard title="Input Types" description="Various input types supported">
        <div class="space-y-4">
          <div class="grid gap-4 sm:grid-cols-2">
            <TextField
              label="Email"
              type="email"
              placeholder="you@example.com"
            />
            <TextField
              label="Password"
              type="password"
              placeholder="********"
            />
            <TextField
              label="Search"
              type="search"
              placeholder="Search..."
            />
            <TextField
              label="URL"
              type="url"
              placeholder="https://example.com"
            />
            <TextField
              label="Number"
              type="number"
              placeholder="123"
            />
            <TextField
              label="Tel"
              type="tel"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div class="rounded-lg bg-lume-muted/50 p-3">
            <pre class="text-xs font-mono text-lume-muted-foreground">&lt;TextField type="text | email | password | ..." /&gt;</pre>
          </div>
        </div>
      </ShowcaseCard>
    </div>

    <!-- Disabled state -->
    <div id="section-disabled">
      <ShowcaseCard title="Disabled" description="Disabled input field">
        <div class="space-y-4">
          <div class="max-w-sm">
            <TextField
              label="Disabled"
              placeholder="Cannot edit"
              disabled
            />
          </div>
          <div class="rounded-lg bg-lume-muted/50 p-3">
            <pre class="text-xs font-mono text-lume-muted-foreground">&lt;TextField disabled /&gt;</pre>
          </div>
        </div>
      </ShowcaseCard>
    </div>

    <!-- With Icons -->
    <div id="section-icons">
      <ShowcaseCard title="With Icons" description="Text fields with prepend and append icons">
        <div class="space-y-4">
          <div class="max-w-sm">
            <TextField
              label="Search"
              type="search"
              placeholder="Search..."
              :prepend-inner-icon="SearchIcon"
            />
          </div>
          <div class="max-w-sm">
            <TextField
              label="Email"
              type="email"
              placeholder="you@example.com"
              :prepend-inner-icon="EmailIcon"
            />
          </div>
          <div class="max-w-sm">
            <TextField
              label="Password"
              type="password"
              placeholder="Enter password"
              :append-inner-icon="PasswordIcon"
            />
          </div>
          <div class="rounded-lg bg-lume-muted/50 p-3">
            <pre class="text-xs font-mono text-lume-muted-foreground">:prepend-inner-icon="SearchIcon"
:append-inner-icon="PasswordIcon"</pre>
          </div>
        </div>
      </ShowcaseCard>
    </div>

    <!-- Prepend Icon -->
    <div id="section-prepend-icon">
      <ShowcaseCard title="Prepend Icon" description="Icon outside the input field (left)">
        <div class="space-y-4">
          <div class="max-w-sm">
            <TextField
              label="Username"
              type="text"
              placeholder="Enter username"
              :prepend-icon="UserIcon"
            />
          </div>
          <div class="rounded-lg bg-lume-muted/50 p-3">
            <pre class="text-xs font-mono text-lume-muted-foreground">:prepend-icon="UserIcon"</pre>
          </div>
        </div>
      </ShowcaseCard>
    </div>

    <!-- Append Icon -->
    <div id="section-append-icon">
      <ShowcaseCard title="Append Icon" description="Icon outside the input field (right)">
        <div class="space-y-4">
          <div class="max-w-sm">
            <TextField
              label="Website"
              type="url"
              placeholder="https://example.com"
              :append-icon="ExternalLinkIcon"
            />
          </div>
          <div class="rounded-lg bg-lume-muted/50 p-3">
            <pre class="text-xs font-mono text-lume-muted-foreground">:append-icon="ExternalLinkIcon"</pre>
          </div>
        </div>
      </ShowcaseCard>
    </div>

    <!-- Combined Icons -->
    <div id="section-combined-icons">
      <ShowcaseCard title="Combined Icons" description="Prepend + inner + append icons together">
        <div class="space-y-4">
          <div class="max-w-sm">
            <TextField
              label="Password"
              type="password"
              placeholder="Enter password"
              :prepend-icon="UserIcon"
              :append-inner-icon="EyeIcon"
            />
          </div>
          <div class="max-w-sm">
            <TextField
              label="API Key"
              type="text"
              placeholder="Paste your API key"
              :prepend-inner-icon="CopyIcon"
              :append-icon="ExternalLinkIcon"
            />
          </div>
          <div class="rounded-lg bg-lume-muted/50 p-3">
            <pre class="text-xs font-mono text-lume-muted-foreground">:prepend-icon="UserIcon"
:append-inner-icon="EyeIcon"</pre>
          </div>
        </div>
      </ShowcaseCard>
    </div>

    <!-- v-model -->
    <div id="section-vmodel">
      <ShowcaseCard title="v-model" description="Two-way binding">
        <div class="space-y-4">
          <div class="max-w-sm">
            <TextField
              label="Search"
              type="search"
              placeholder="Type to search..."
              v-model="search"
            />
          </div>
          <div class="rounded-lg border p-3">
            <p class="text-xs font-medium">Current value: <span class="font-mono text-lume-primary">"{{ search }}"</span></p>
          </div>
          <div class="rounded-lg bg-lume-muted/50 p-3">
            <pre class="text-xs font-mono text-lume-muted-foreground">v-model="search"</pre>
          </div>
        </div>
      </ShowcaseCard>
    </div>

    <!-- Form example -->
    <div id="section-form">
      <ShowcaseCard title="Form Example" description="Login form with TextField">
        <div class="max-w-sm mx-auto">
          <form @submit.prevent class="space-y-4">
            <TextField
              label="Email"
              type="email"
              placeholder="you@example.com"
              description="We'll never share your email."
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-lg bg-lume-primary px-4 py-2 text-sm font-medium text-lume-primary-foreground shadow transition-colors hover:bg-lume-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lume-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9"
            >
              Sign In
            </button>
          </form>
        </div>
      </ShowcaseCard>
    </div>

    <!-- Usage -->
    <div id="section-usage">
      <ShowcaseCard title="Usage" description="How to use TextField component">
        <div class="rounded-lg bg-zinc-950 p-4 text-sm">
          <pre class="text-green-400 overflow-x-auto"><code>&lt;script setup lang="ts"&gt;
import { ref } from "vue"
import { TextField } from "@/components/ui/textfield"

const value = ref("")
&lt;/script&gt;

&lt;template&gt;
  &lt;TextField
    label="Email"
    placeholder="you@example.com"
    description="Help text"
    error="Error message"
    v-model="value"
  /&gt;
&lt;/template&gt;</code></pre>
        </div>
      </ShowcaseCard>
    </div>
  </div>
</template>