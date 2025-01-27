// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7YxWRrh3dN23tQ7PqjX2hp
// Component: PlUFaVq0OU9N

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Header from "../../Header"; // plasmic-import: uZX7p1wyVbCa/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { Login } from "@components/Login"; // plasmic-import: 5Ay7Fc19l469/codeComponent
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdPassword } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdPassword_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7YxWRrh3dN23tQ7PqjX2hp/projectcss
import sty from "./PlasmicLogin.module.css"; // plasmic-import: PlUFaVq0OU9N/css

createPlasmicElementProxy;

export type PlasmicLogin__VariantMembers = {};
export type PlasmicLogin__VariantsArgs = {};
type VariantPropType = keyof PlasmicLogin__VariantsArgs;
export const PlasmicLogin__VariantProps = new Array<VariantPropType>();

export type PlasmicLogin__ArgsType = {};
type ArgPropType = keyof PlasmicLogin__ArgsType;
export const PlasmicLogin__ArgProps = new Array<ArgPropType>();

export type PlasmicLogin__OverridesType = {
  root?: Flex__<"div">;
  section?: Flex__<"section">;
  header?: Flex__<typeof Header>;
  main?: Flex__<"main">;
  left?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  right?: Flex__<"div">;
  h1?: Flex__<"h1">;
  form?: Flex__<typeof FormWrapper>;
  input?: Flex__<typeof AntdInput>;
  passwordInput?: Flex__<typeof AntdPassword>;
  loginButton?: Flex__<typeof AntdButton>;
  login?: Flex__<typeof Login>;
};

export interface DefaultLoginProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLogin__RenderFunc(props: {
  variants: PlasmicLogin__VariantsArgs;
  args: PlasmicLogin__ArgsType;
  overrides: PlasmicLogin__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <main
              data-plasmic-name={"main"}
              data-plasmic-override={overrides.main}
              className={classNames(projectcss.all, sty.main)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__q8Hmo)}>
                <div
                  data-plasmic-name={"left"}
                  data-plasmic-override={overrides.left}
                  className={classNames(projectcss.all, sty.left)}
                >
                  <PlasmicImg__
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"92vh"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"eager"}
                    src={{
                      src: "/plasmic/tady_to_zije_v_02/images/image.webp",
                      fullWidth: 933,
                      fullHeight: 1400,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <div
                  data-plasmic-name={"right"}
                  data-plasmic-override={overrides.right}
                  className={classNames(projectcss.all, sty.right)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__rS6M)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__j22Dx
                      )}
                    >
                      {"Welcome to"}
                    </div>
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"tadyTo\u017dije"}
                    </h1>
                    {(() => {
                      const child$Props = {
                        autoDisableWhileSubmitting: true,
                        className: classNames("__wab_instance", sty.form),
                        extendedOnValuesChange: async (...eventArgs: any) => {
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "value",
                            ["form", "value"],
                            FormWrapper_Helpers
                          ).apply(null, eventArgs);
                        },
                        formItems: undefined,
                        labelCol: { span: 8, horizontalOnly: true },
                        layout: "vertical",
                        mode: undefined,
                        onFinish: async values => {
                          const $steps = {};

                          $steps["runActionOnLogin"] = true
                            ? (() => {
                                const actionArgs = {
                                  tplRef: "login",
                                  action: "triggerLogin"
                                };
                                return (({ tplRef, action, args }) => {
                                  return $refs?.[tplRef]?.[action]?.(
                                    ...(args ?? [])
                                  );
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["runActionOnLogin"] != null &&
                            typeof $steps["runActionOnLogin"] === "object" &&
                            typeof $steps["runActionOnLogin"].then ===
                              "function"
                          ) {
                            $steps["runActionOnLogin"] = await $steps[
                              "runActionOnLogin"
                            ];
                          }

                          $steps["runActionOnForm"] = true
                            ? (() => {
                                const actionArgs = {
                                  tplRef: "form",
                                  action: "clearFields"
                                };
                                return (({ tplRef, action, args }) => {
                                  return $refs?.[tplRef]?.[action]?.(
                                    ...(args ?? [])
                                  );
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["runActionOnForm"] != null &&
                            typeof $steps["runActionOnForm"] === "object" &&
                            typeof $steps["runActionOnForm"].then === "function"
                          ) {
                            $steps["runActionOnForm"] = await $steps[
                              "runActionOnForm"
                            ];
                          }

                          $steps["goToHomepage"] = true
                            ? (() => {
                                const actionArgs = { destination: `/` };
                                return (({ destination }) => {
                                  if (
                                    typeof destination === "string" &&
                                    destination.startsWith("#")
                                  ) {
                                    document
                                      .getElementById(destination.substr(1))
                                      .scrollIntoView({ behavior: "smooth" });
                                  } else {
                                    __nextRouter?.push(destination);
                                  }
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["goToHomepage"] != null &&
                            typeof $steps["goToHomepage"] === "object" &&
                            typeof $steps["goToHomepage"].then === "function"
                          ) {
                            $steps["goToHomepage"] = await $steps[
                              "goToHomepage"
                            ];
                          }
                        },
                        onFinishFailed: async data => {
                          const $steps = {};

                          $steps["runActionOnForm"] = true
                            ? (() => {
                                const actionArgs = {
                                  tplRef: "form",
                                  action: "clearFields"
                                };
                                return (({ tplRef, action, args }) => {
                                  return $refs?.[tplRef]?.[action]?.(
                                    ...(args ?? [])
                                  );
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["runActionOnForm"] != null &&
                            typeof $steps["runActionOnForm"] === "object" &&
                            typeof $steps["runActionOnForm"].then === "function"
                          ) {
                            $steps["runActionOnForm"] = await $steps[
                              "runActionOnForm"
                            ];
                          }
                        },
                        onIsSubmittingChange: async (...eventArgs: any) => {
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "isSubmitting",
                            ["form", "isSubmitting"],
                            FormWrapper_Helpers
                          ).apply(null, eventArgs);
                        },
                        ref: ref => {
                          $refs["form"] = ref;
                        },
                        wrapperCol: { span: 16, horizontalOnly: true }
                      };
                      initializeCodeComponentStates(
                        $state,
                        [
                          {
                            name: "value",
                            plasmicStateName: "form.value"
                          },
                          {
                            name: "isSubmitting",
                            plasmicStateName: "form.isSubmitting"
                          }
                        ],
                        [],
                        FormWrapper_Helpers ?? {},
                        child$Props
                      );

                      return (
                        <FormWrapper
                          data-plasmic-name={"form"}
                          data-plasmic-override={overrides.form}
                          {...child$Props}
                        >
                          <FormItemWrapper
                            className={classNames(
                              "__wab_instance",
                              sty.formField__q958M
                            )}
                            label={"P\u0159ihla\u0161ovac\u00ed e-mail"}
                            name={"email"}
                            preserve={false}
                            rules={[{ ruleType: "required" }]}
                          >
                            <AntdInput
                              className={classNames(
                                "__wab_instance",
                                sty.input
                              )}
                            />
                          </FormItemWrapper>
                          <FormItemWrapper
                            className={classNames(
                              "__wab_instance",
                              sty.formField__jaGlf
                            )}
                            label={"Heslo"}
                            name={"password"}
                            preserve={false}
                            rules={[{ ruleType: "required" }]}
                          >
                            <AntdPassword
                              className={classNames(
                                "__wab_instance",
                                sty.passwordInput
                              )}
                            />
                          </FormItemWrapper>
                          <AntdButton
                            className={classNames(
                              "__wab_instance",
                              sty.loginButton
                            )}
                            loading={(() => {
                              try {
                                return $state.form.isSubmitting;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return false;
                                }
                                throw e;
                              }
                            })()}
                            submitsForm={true}
                            type={"default"}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__zi95X
                              )}
                            >
                              {"P\u0159ihl\u00e1sti se"}
                            </div>
                          </AntdButton>
                        </FormWrapper>
                      );
                    })()}
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__fdVMa
                      )}
                      onClick={async event => {
                        const $steps = {};

                        $steps["goToRegistration"] = true
                          ? (() => {
                              const actionArgs = { destination: `/registrace` };
                              return (({ destination }) => {
                                if (
                                  typeof destination === "string" &&
                                  destination.startsWith("#")
                                ) {
                                  document
                                    .getElementById(destination.substr(1))
                                    .scrollIntoView({ behavior: "smooth" });
                                } else {
                                  __nextRouter?.push(destination);
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["goToRegistration"] != null &&
                          typeof $steps["goToRegistration"] === "object" &&
                          typeof $steps["goToRegistration"].then === "function"
                        ) {
                          $steps["goToRegistration"] = await $steps[
                            "goToRegistration"
                          ];
                        }
                      }}
                    >
                      {"Zaregistruj se zde"}
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </section>
          <Login
            data-plasmic-name={"login"}
            data-plasmic-override={overrides.login}
            className={classNames("__wab_instance", sty.login)}
            email={(() => {
              try {
                return $state.form.value.email;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "user@example.com";
                }
                throw e;
              }
            })()}
            password={(() => {
              try {
                return $state.form.value.password;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "password123";
                }
                throw e;
              }
            })()}
            ref={ref => {
              $refs["login"] = ref;
            }}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "section",
    "header",
    "main",
    "left",
    "img",
    "right",
    "h1",
    "form",
    "input",
    "passwordInput",
    "loginButton",
    "login"
  ],
  section: [
    "section",
    "header",
    "main",
    "left",
    "img",
    "right",
    "h1",
    "form",
    "input",
    "passwordInput",
    "loginButton"
  ],
  header: ["header"],
  main: [
    "main",
    "left",
    "img",
    "right",
    "h1",
    "form",
    "input",
    "passwordInput",
    "loginButton"
  ],
  left: ["left", "img"],
  img: ["img"],
  right: ["right", "h1", "form", "input", "passwordInput", "loginButton"],
  h1: ["h1"],
  form: ["form", "input", "passwordInput", "loginButton"],
  input: ["input"],
  passwordInput: ["passwordInput"],
  loginButton: ["loginButton"],
  login: ["login"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  header: typeof Header;
  main: "main";
  left: "div";
  img: typeof PlasmicImg__;
  right: "div";
  h1: "h1";
  form: typeof FormWrapper;
  input: typeof AntdInput;
  passwordInput: typeof AntdPassword;
  loginButton: typeof AntdButton;
  login: typeof Login;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogin__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogin__VariantsArgs;
    args?: PlasmicLogin__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogin__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLogin__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLogin__ArgProps,
          internalVariantPropNames: PlasmicLogin__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    header: makeNodeComponent("header"),
    main: makeNodeComponent("main"),
    left: makeNodeComponent("left"),
    img: makeNodeComponent("img"),
    right: makeNodeComponent("right"),
    h1: makeNodeComponent("h1"),
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    passwordInput: makeNodeComponent("passwordInput"),
    loginButton: makeNodeComponent("loginButton"),
    login: makeNodeComponent("login"),

    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */