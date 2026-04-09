<script setup lang="ts">
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ShowcaseCard from "../ShowcaseCard.vue"
</script>

<template>
  <div class="space-y-8">
    <!-- Page header -->
    <div>
      <div class="flex items-center gap-3">
        <h1 class="text-2xl font-bold tracking-tight">Alert</h1>
        <span class="rounded-full bg-lume-primary/10 px-2.5 py-0.5 text-xs font-medium text-lume-primary">Component</span>
      </div>
      <p class="text-lume-muted-foreground mt-1 text-sm">
        Displays a callout for user attention. Supports multiple variants and can include title, description, and actions.
      </p>
    </div>

    <!-- Quick preview -->
    <ShowcaseCard title="Preview" description="Default alert rendering">
      <div class="flex items-center justify-center py-8">
        <Alert class="max-w-md">
          <AlertTitle>Alert Title</AlertTitle>
          <AlertDescription>
            This is the alert description with important information.
          </AlertDescription>
        </Alert>
      </div>
    </ShowcaseCard>

    <!-- Variants section -->
    <div id="section-variants">
      <ShowcaseCard title="Variants" description="Available style variants">
        <div class="space-y-4">
          <div class="flex flex-col gap-4">
            <Alert class="max-w-md">
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>
                This is the default alert style.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive" class="max-w-md">
              <AlertTitle>-destructive Alert</AlertTitle>
              <AlertDescription>
                This alert indicates an error or destructive action.
              </AlertDescription>
            </Alert>

            <Alert variant="tonal" class="max-w-md">
              <AlertTitle>Tonal Alert</AlertTitle>
              <AlertDescription>
                A tonal alert with subtle background.
              </AlertDescription>
            </Alert>

            <Alert variant="success" class="max-w-md">
              <AlertTitle>Success Alert</AlertTitle>
              <AlertDescription>
                Operation completed successfully.
              </AlertDescription>
            </Alert>

            <Alert variant="warning" class="max-w-md">
              <AlertTitle>Warning Alert</AlertTitle>
              <AlertDescription>
                Please review before proceeding.
              </AlertDescription>
            </Alert>

            <Alert variant="info" class="max-w-md">
              <AlertTitle>Info Alert</AlertTitle>
              <AlertDescription>
                Here's some additional information.
              </AlertDescription>
            </Alert>
          </div>
          <div class="rounded-lg bg-lume-muted/50 p-3">
            <p class="text-xs font-mono text-lume-muted-foreground">
              &lt;Alert variant="default | destructive | tonal | success | warning | info" /&gt;
            </p>
          </div>
        </div>
      </ShowcaseCard>
    </div>

    <!-- With Icon -->
    <div id="section-icon">
      <ShowcaseCard title="With Icon" description="Alert with leading icon">
        <div class="space-y-4">
          <Alert class="max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
            <AlertTitle>Info Alert</AlertTitle>
            <AlertDescription>
              This is an informational alert with an icon.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive" class="max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again.
            </AlertDescription>
          </Alert>

          <Alert variant="success" class="max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your changes have been saved.
            </AlertDescription>
          </Alert>

          <Alert variant="warning" class="max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-600"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Please review before proceeding.
            </AlertDescription>
          </Alert>

          <Alert variant="info" class="max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              Here's some additional information.
            </AlertDescription>
          </Alert>
        </div>
      </ShowcaseCard>
    </div>

    <!-- With Actions -->
    <div id="section-actions">
      <ShowcaseCard title="With Actions" description="Alerts with action buttons">
        <div class="space-y-4">
          <Alert class="max-w-md">
            <AlertTitle>Update Available</AlertTitle>
            <AlertDescription>
              A new version is ready to install.
            </AlertDescription>
            <AlertAction class="mt-3">
              <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lume-ring disabled:pointer-events-none disabled:opacity-50 bg-lume-primary text-lume-primary-foreground hover:bg-lume-primary/90 h-8 px-3">
                Update Now
              </button>
            </AlertAction>
          </Alert>

          <Alert variant="destructive" class="max-w-md">
            <AlertTitle>Delete Account</AlertTitle>
            <AlertDescription>
              This action is permanent and cannot be undone.
            </AlertDescription>
            <AlertAction class="mt-3 gap-2">
              <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lume-ring disabled:pointer-events-none disabled:opacity-50 border border-lume-input bg-lume-background hover:bg-lume-accent hover:text-lume-accent-foreground h-8 px-3">
                Cancel
              </button>
              <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lume-ring disabled:pointer-events-none disabled:opacity-50 bg-lume-destructive text-lume-destructive-foreground hover:bg-lume-destructive/90 h-8 px-3">
                Delete
              </button>
            </AlertAction>
          </Alert>
        </div>
      </ShowcaseCard>
    </div>

    <!-- Complex Example -->
    <div id="section-complex">
      <ShowcaseCard title="Complex Examples" description="Real-world alert compositions">
        <div class="space-y-6">
          <!-- Success -->
          <div>
            <p class="text-xs font-medium text-lume-muted-foreground mb-3">Success</p>
            <Alert class="max-w-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <AlertTitle>Changes saved</AlertTitle>
              <AlertDescription>
                Your preferences have been updated successfully.
              </AlertDescription>
              <AlertAction class="mt-3">
                <button class="text-sm font-medium text-lume-primary hover:underline">
                  View details
                </button>
              </AlertAction>
            </Alert>
          </div>

          <!-- With Link -->
          <div>
            <p class="text-xs font-medium text-lume-muted-foreground mb-3">With Link</p>
            <Alert class="max-w-md">
              <AlertTitle>New message</AlertTitle>
              <AlertDescription>
                You have a new message from
                <a href="#" class="font-medium text-lume-primary hover:underline">john@example.com</a>
              </AlertDescription>
              <AlertAction class="mt-3">
                <button class="text-sm font-medium text-lume-primary hover:underline">
                  View message
                </button>
              </AlertAction>
            </Alert>
          </div>
        </div>
      </ShowcaseCard>
    </div>

    <!-- Usage -->
    <div id="section-usage">
      <ShowcaseCard title="Usage" description="How to use the Alert component">
        <div class="rounded-lg bg-zinc-950 p-4 text-sm">
          <pre class="text-green-400 overflow-x-auto"><code>&lt;script setup lang="ts"&gt;
import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert"
&lt;/script&gt;

&lt;template&gt;
  &lt;Alert&gt;
    &lt;AlertTitle&gt;Alert Title&lt;/AlertTitle&gt;
    &lt;AlertDescription&gt;
      Your description text here.
    &lt;/AlertDescription&gt;
    &lt;AlertAction&gt;
      &lt;Button&gt;Action&lt;/Button&gt;
    &lt;/AlertAction&gt;
  &lt;/Alert&gt;
&lt;/template&gt;</code></pre>
        </div>
      </ShowcaseCard>
    </div>
  </div>
</template>